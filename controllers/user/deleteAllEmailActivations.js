const EmailActivation = require('../../models/emailActivationModel')

// @ GET
// @ '/user/activate/delete/all'
// @ PUBLIC
const deleteAllEmailActivations = async (req, res) => {
    const deletedEmailActivations = await EmailActivation.deleteMany({})
    res.status(200).json({
        deletedEmailActivations: deletedEmailActivations
    })        
}

module.exports = deleteAllEmailActivations