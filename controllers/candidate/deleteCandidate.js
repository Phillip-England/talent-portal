const Candidate = require('../../models/candidateModel')

const deleteCandidate = async (req, res) => {
    try {
        const deletedCandidate = await Candidate.findByIdAndDelete(req.params.candidate)
        res.status(200).json({
            deletedCandidate: deleteCandidate
        })
    } catch (error) {
        res.status(400).json({
            error: 'candidate does not exist'
        })
    }
}

module.exports = deleteCandidate