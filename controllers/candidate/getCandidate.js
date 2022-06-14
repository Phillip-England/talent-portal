const Candidate = require('../../models/candidateModel')

const getCandidate = async (req, res) => {
    const candidate = Candidate.findById(req.params.candidate)
}

module.exports = getCandidate