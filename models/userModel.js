const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const chars = require('../service/chars')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an email"],
        validate: {
            validator: function (value) {
                return validator.isEmail(value)
            },
            message: props => `${props.value} is not a valid email`
        }
    },
    username: {
        type: String,
        minLength: [4, "Username must contain between 4 and 15 characters"],
        maxLength: [15, "Username must contain between 4 and 15 characters"],
        required: [true, "Please provide a username"],
        validate: {
            validator: function (value) {
                return validator.isWhitelisted(value, chars.whitelistUsername())
            },
            message: props => 'Username must only contain A-Z, 0-9, -, and _'
        }
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
},
{
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)