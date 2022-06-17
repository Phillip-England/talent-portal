const Candidate = require('../../models/candidateModel')

const getCandidate = async (req, res) => {
    const candidate = await Candidate.findById(req.params.candidate)
    res.status(200).json({
        candidate: candidate
    })
}

module.exports = getCandidate