const mongoose = require('mongoose')

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