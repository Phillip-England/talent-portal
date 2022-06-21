const Validate = require('../../service/objects/Validate')
const chars = require('../../service/chars')
const Question = require('../../models/questionModel')


const createQuestion = async (req, res) => {
    try {
        let {question} = req.body
        const validQuestion = new Validate(question, 'Question')
        validQuestion.setConstraints({
            maxLength: 50,
            required: true,
            whiteList: chars.whitelistAlpha().concat(chars.whitelistNumbers(), ['?']),
            unique: await Question.find({user: req.user, name: question, step: req.params.step})
        })
        validQuestion.setErrorMessages({
            whiteListError: 'Questions must contain only letters, numbers and question marks',
            uniqueError: 'This question has already been created'
            
        })
        validQuestion.runValidation()
        let newQuestion = await Question.create({
            user: req.user,
            step: req.params.step,
            name: validQuestion.value
        })
        res.status(200).json({
            name: newQuestion
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

module.exports = createQuestion