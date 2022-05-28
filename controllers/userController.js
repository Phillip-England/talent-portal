const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const validator = require('validator')
const defaultWhitelist = require('../service/defaultWhitelist')
const usernameWhitelist = require('../service/usernameWhitelist')

// @ '/'
// @ GET
// @ PUBLIC
const loginPage = (req, res) => {
    res.render('login.ejs', {
        NODE_ENV: process.env.NODE_ENV
    })
}

// @ '/login'
// @ POST
// @ PUBLIC
const loginUser = (req, res) => {
    const {username, password} = req.body
    console.log(username, password)
}

// @ '/register'
// @ POST
// @ PUBLIC
const registerUser = async (req, res) => {
    try {
        const {email, username, password} = req.body
        //checking if all form fields were completed
        if (!email || !username || !password){
            throw new Error('User already exists')
        }
        //checking if the username is already being used
        const userExists = await User.findOne({username:username})
        if (userExists) {
            throw new Error('Username already taken')
        }
        //============================
        //EMAIL VALIDATION
        //============================
        //checking if email is valid
        if (validator.isEmail(email) == false){
            throw new Error('Invalid email')
        }
        //whitelist check
        if (validator.isWhitelisted(email, defaultWhitelist()) == false){
            throw new Error('Email contains invalid characters')
        }
        //normalizing our email (making all lowercase)
        let normalizedEmail = validator.normalizeEmail(email)
        //escaping any HTML injections
        let validatedEmail = validator.escape(normalizedEmail)
        //============================
        //USERNAME VALIDATION
        //============================
        //whitelist check
        if (validator.isWhitelisted(username, usernameWhitelist()) == false){
            throw new Error('Username may only contain A-Z, 0-9, -, and _')
        }
        //trimming spaces on sides
        let trimmedUsername = validator.trim(username)
        //checking if username is between 4 and 15 characters
        if (validator.isLength(trimmedUsername, {min: 4, max: 15}) == false){
            throw new Error('Username must be between 4 and 15 characters')
        }
        //escaping and HTML injections
        let validatedUsername = validator.escape(trimmedUsername)
        //============================
        //PASSWORD VALIDATION
        //============================
        //encrypting password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
    

}

module.exports = {
    loginPage,
    loginUser,
    registerUser,
}