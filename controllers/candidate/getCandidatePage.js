const Candidate = require('../../models/candidateModel')

const getCandidatePage = async (req, res) => {
    const candidates = await Candidate.find({user:req.user})
    res.render('candidates.ejs', {
        csrfToken: req.csrfToken(),
        candidates: candidates
    })
}

module.exports = getCandidatePage