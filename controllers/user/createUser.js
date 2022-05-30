const bcrypt = require('bcrypt')
const User = require('../../models/userModel')
const EmailActivation = require('../../models/emailActivationModel')
const validator = require('validator')
const nodemailer = require('nodemailer')
const crypto = require('crypto')
const chars = require('../../service/chars')
const sanitize = require('../../service/sanitize')
const valid = require('../../service/valid')

// @ POST
// @ '/register'
// @ PUBLIC
const createUser = async (req, res) => {
    try {
        //setting up variables
        let activation
        let randomByte
        let newUser
        let errorSource
        let transporter
        let activationUrl
        let info
        //grabbing expected inputs from req.body
        const {email, username, password} = req.body
        //checking if the user already exists
        const userExists = await User.findOne({username:username})
        if (userExists) {
            throw new Error('Username already taken')
        }
        //sanitizing inputs
        const sanitizedEmail = sanitize.escapeAndTrim(email)
        const sanitizedUsername = sanitize.escapeAndTrim(username)
        const sanitizedPassword = validator.escape(password)
        //checking if password is between 8 and 64 characters long
        if (valid.minMax(sanitizedPassword, 8, 64) == false){
            throw new Error('Password must be between 8 and 64 characters long')
        }
        //checking if the password contains atleast one capital letter
        if (valid.contains(sanitizedPassword, chars.upperCase()) == false){
            throw new Error('Password must contain at least 1 capital letter')
        }
        //checking if the password contains atleast one special symbol
        if (valid.contains(sanitizedPassword, chars.passwordSymbols()) == false){
            throw new Error('Password must contain at least one symbol (!, @, #, ect.)')
        }
        //hashing our password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(sanitizedPassword, salt)
        //creating a new user object
        newUser = await User.create({
            email: sanitizedEmail,
            username: sanitizedUsername,
            password: hashedPassword
        })
        //storing our random byte in database
        activation = await EmailActivation.create({
            user: newUser._id,
            randomString: chars.randAplha(64)
        })
        console.log(activation)
        //setting up an email transporter
        transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com",
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD
            }
        })
        //create unique url for account activation
        activationUrl = 'http://' + req.get('host') + '/user' + '/activate' + '/' + activation.randomString
        //emailing the activation url to our client
        info = await transporter.sendMail({
            from: process.env.EMAIL_ADDRESS,
            to: newUser.email,
            subject: "Activate Your Account",
            html: `<a href=${activationUrl}>${activationUrl}</a>`
        })
    } catch (error) {
        //returning any errors as json
        res.status(400).json({
            error: error
        })
        console.log(error)
    }
    

}

module.exports = createUser