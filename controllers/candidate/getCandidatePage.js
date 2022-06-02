const Candidate = require('../../models/candidateModel')

const getCandidatePage = async (req, res) => {
    //loading resources
    const candidates = await Candidate.find({})
    res.render('candidates.ejs', {
        csrfToken: req.csrfToken(),
        candidates: candidates
    })
}

module.exports = getCandidatePage