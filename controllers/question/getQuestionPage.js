const getQuestionPage = (req, res) => {
    res.render('questions.ejs', {
        csrfToken: req.csrfToken()
    })
}

module.exports = getQuestionPage