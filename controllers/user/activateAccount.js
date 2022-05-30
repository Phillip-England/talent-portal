const User = require('../../models/userModel')
const EmailActivation = require('../../models/emailActivationModel')

const activateAccount = async (req, res) => {
    try {
        //getting the Email activation document using the parameter passed in the URL
        let emailDocument = await EmailActivation.findOne({randomString:req.params.randomString})
        //getting the user using the email activation document (the users _id is associated with it)
        //changing the users active status from false to true
        let activatedUser = await User.findOneAndUpdate({_id:emailDocument.user}, {
            active: true,
        })
        //redirecting to the successful activation page
        res.redirect(200, '/user/activation-page')
    } catch (error) {
        
    }
}

module.exports = activateAccount