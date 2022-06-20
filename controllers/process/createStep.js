const Process = require('../../models/processModel')
const Validate = require('../../service/objects/Validate')
const chars = require('../../service/chars')

const createStep = async (req, res) => {
    try {
        let {stepName} = req.body
        let validStepName = new Validate(stepName, 'Step Name')
        validStepName.setConstraints({
            maxLength: 30,
            minLength: 4,
            required: true,
            whiteList: chars.whitelistAlpha(),
        })
        validStepName.setErrorMessages({
            whiteListError: 'Step name must only contain letters and spaces'
        })
        validStepName.runValidation()
        let stepExists = await Process.findOne({step:validStepName.value})
        if (stepExists) {
            throw new Error('This step already exists')
        }
        let newStep = await Process.create({
            user: req.user,
            step: validStepName.value
        })
        res.status(200).json({
            name: newStep
        })
        // await Process.deleteMany({})
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

module.exports = createStep