const Candidate = require('../../models/candidateModel')

const getCandidateInterview = async (req, res) => {
    try {
        console.log('hit')
        let candidate = await Candidate.findById(req.params.candidate)
        console.log(candidate)
        res.render('candidateInterview', {
            candidate: candidate,
            csrfToken: req.csrfToken()
        })
        console.log('hit')
    } catch (error) {
        res.render('login.ejs')
    }
}

module.exports = getCandidateInterview