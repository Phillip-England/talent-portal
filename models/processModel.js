const mongoose = require('mongoose')

const processSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    step: {
        type: String
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('Process', processSchema)