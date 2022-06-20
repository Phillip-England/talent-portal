const mongoose = require('mongoose')

const stepSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: String
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('Step', stepSchema)