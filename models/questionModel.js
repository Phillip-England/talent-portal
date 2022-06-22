const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    step: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Step'
    },
    name: {
        type: String
    },
},
{
    timestamps: true,
})

module.exports = mongoose.model("Question", questionSchema)