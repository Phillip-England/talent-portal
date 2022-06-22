const Step = require('../../models/stepModel')
const Question = require('../../models/questionModel')

const deleteStep = async (req, res) => {
    try {
        let deletedStep = await Step.findByIdAndDelete(req.params.step)
        let associatedQuestions = await Question.deleteMany({step:req.params.step})
        let allSteps = await Step.find({user:req.user})
        let updateStepOrder
        for (let x = 0; x < allSteps.length; x++){
            updateStepOrder = await Step.findByIdAndUpdate(allSteps[x]._id, {
                order: x+1
            })
        }
        let updatedSteps = await Step.find({user:req.user})
        if (!deletedStep) {
            throw new Error('Step has already been deleted')
        }
        res.status(200).json({
            deletedStep: deletedStep
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

module.exports = deleteStep