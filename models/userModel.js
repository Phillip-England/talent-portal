const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const chars = require('../service/chars')

const userSchema = mongoose.Schema({
    email: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    active: {
        type: Boolean,
        default: false,
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model("User", userSchema)