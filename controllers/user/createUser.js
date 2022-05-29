const bcrypt = require('bcrypt')
const User = require('../../models/userModel')
const validator = require('validator')
const chars = require('../../service/chars')
const sanitize = require('../../service/sanitize')
const valid = require('../../service/valid')

// @ '/register'
// @ POST
// @ PUBLIC
const createUser = async (req, res) => {
    try {
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
        let newUser = new User({
            email: sanitizedEmail,
            username: sanitizedUsername,
            password: hashedPassword
        })
        // handling any validation errors that occur in our User model
        newUser.save((err) =>{
            if (err) {
                let errorSource = Object.keys(err.errors)[0]
                res.status(400).json({
                    error: err.errors[errorSource].message
                })
            } else {
                //if no validation errors occur, return the new user as json
                res.status(200).json({
                    user: newUser
                })
            }
        })

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
        console.log(error.message)
    }
    

}

module.exports = createUser