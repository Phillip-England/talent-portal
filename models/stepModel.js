const mongoose = require('mongoose')

const stepSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: String
    },
    order: {
        type: Number
    },
},
{
    timestamps: true,
})

module.exports = mongoose.model('Step', stepSchema)