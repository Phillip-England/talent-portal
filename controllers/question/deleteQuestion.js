const Question = require('../../models/questionModel')

const deleteQuestion = async (req, res) => {
    try {
        const deletedQuestion = await Question.findByIdAndDelete(req.params.question)
        if (!deleteQuestion) {
            throw new Error('Question already deleted')
        }
        res.status(200).json({
            deletedQuestion: deletedQuestion
        })
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
}

module.exports = deleteQuestion