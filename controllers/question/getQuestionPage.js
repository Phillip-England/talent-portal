const Process = require('../../models/processModel')

const getQuestionPage = async (req, res) => {
    let process = await Process.find({user:req.user})
    console.log(process)
    res.render('questions.ejs', {
        csrfToken: req.csrfToken(),
        process: process
    })
}

module.exports = getQuestionPage