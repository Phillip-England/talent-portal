const mongoose = require('mongoose')

const candidateSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
        default: false,
    },
},
{
    timestamps: true,
})

module.exports = mongoose.model("Candidate", candidateSchema)