const mongoose = require('mongoose')

const candidateSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
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