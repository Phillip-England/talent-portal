const getInterviewerPage = (req, res) => {
    res.render('interviewers.ejs', {
        csrfToken: req.csrfToken()
    })
}

module.exports = getInterviewerPage