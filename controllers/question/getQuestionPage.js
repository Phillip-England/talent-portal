const Step = require('../../models/stepModel')
const Question = require('../../models/questionModel')

const getQuestionPage = async (req, res) => {
    let steps = await Step.find({user:req.user})
    let questions = await Question.find({user:req.user})
    res.render('questions.ejs', {
        csrfToken: req.csrfToken(),
        steps: steps,
        questions: questions
    })
}

module.exports = getQuestionPage