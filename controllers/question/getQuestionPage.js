const Step = require('../../models/stepModel')

const getQuestionPage = async (req, res) => {
    let steps = await Step.find({user:req.user})
    res.render('questions.ejs', {
        csrfToken: req.csrfToken(),
        steps: steps
    })
}

module.exports = getQuestionPage