const mongoose = require('mongoose')

const emailActivationSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    randomString: {
        type: String
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('EmailActivation', emailActivationSchema)