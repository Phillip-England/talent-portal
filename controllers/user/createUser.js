const bcrypt = require('bcrypt')
const User = require('../../models/userModel')
const EmailActivation = require('../../models/emailActivationModel')
const validator = require('validator')
const chars = require('../../service/chars')
const sanitize = require('../../service/sanitize')
const valid = require('../../service/valid')
const emailer = require('../../service/emailer')

// @ POST
// @ '/user/register'
// @ PUBLIC
const createUser = async (req, res) => {
    try {
        console.log(emailer)
        //setting up variables
        let activation
        let newUser
        let activationUrl
        let activationEmail
        //grabbing expected inputs from req.body
        let {email, username, password} = req.body
        //checking if a email was provided
        if (!email) {
            throw new Error('Please provide an email')
        }
        //checking if a username was provided
        if (!username) {
            throw new Error('Please provide a username')
        }
        //checking if a username was provided
        if (!password) {
            throw new Error('Please provide a password')
        }
        //======================
        //EMAIL VALIDATION
        //======================
        //checking if the email is already in use
        const emailExists = await User.findOne({email:email})
        if (emailExists) {
            throw new Error('Account with this email already exists')
        }
        //checking if a valid email was provided
        if (validator.isEmail(email) == false){
            throw new Error('Please provide a valid email')
        }
        //======================
        //USERNAME VALIDATION
        //======================
        //checking if the username already exists
        const usernameExists = await User.findOne({username:username})
        if (usernameExists) {
            throw new Error('Username already taken')
        }
        //checking if the username is between 4 and 15 characters
        if (valid.minMax(username, 4, 15) == false){
            throw new Error('Username must be between 4 and 15 characters long')
        }
        //whitlist check
        if (validator.isWhitelisted(username, chars.whitelistUsername()) == false){
            throw new Error('Username must only contain A-Z, 0-9, -, and _')
        }
        //======================
        //PASSWORD VALIDATION
        //======================
        //checking if password is between 8 and 64 characters long
        if (valid.minMax(password, 8, 64) == false){
            throw new Error('Password must be between 8 and 64 characters long')
        }
        //checking if the password contains atleast one capital letter
        if (valid.contains(password, chars.upperCase()) == false){
            throw new Error('Password must contain at least 1 capital letter')
        }
        //checking if the password contains atleast one special symbol
        if (valid.contains(password, chars.passwordSymbols()) == false){
            throw new Error('Password must contain at least one symbol (!, @, #, ect.)')
        }
        //sanitizing inputs
        email = sanitize.escapeAndTrim(email)
        email = validator.normalizeEmail(email)
        username = sanitize.escapeAndTrim(username)
        password = validator.escape(password)
        //hashing our password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(sanitizedPassword, salt)
        //creating a new user object
        newUser = await User.create({
            email: email,
            username: username,
            password: hashedPassword
        })
        //storing our random byte in database
        activation = await EmailActivation.create({
            user: newUser._id,
            randomString: chars.randAplha(64)
        })
        //create unique url for account activation
        activationUrl = 'http://' + req.get('host') + '/user' + '/activate' + '/' + activation.randomString
        //emailing the activation url to our client
        activationEmail = await emailer.accountActivation(newUser.email, activationUrl)
        //returning user info as json (used to display "click here to send link again")
        res.status(200).json({
            user: newUser,
            activationUrl: activationUrl,
        })
    } catch (error) {
        //returning any errors as json
        res.status(400).json({
            error: error.message
        })
        console.log(error)
    }
    

}

module.exports = createUser