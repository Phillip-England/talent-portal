const User = require('../../models/userModel')
const EmailActivation = require('../../models/emailActivationModel')

// @ POST
// @ '/user/activate/:randomString'
// @ PUBLIC
const activateAccount = async (req, res) => {
    try {
        //getting the Email activation document using the parameter passed in the URL
        let emailDocument = await EmailActivation.findOne({randomString:req.params.randomString})
        //changing the users active status from false to true
        let activatedUser = await User.findOneAndUpdate({_id:emailDocument.user}, {
            active: true,
        })
        //delete the random string from the DB
        let deletedEmailDocument = await EmailActivation.findOneAndDelete({randomString:req.params.randomString})
        //rendering the login page
        res.render('login.ejs', {
            user: activatedUser,
            activationMessage: true, //will allow us to render the activation message upon returning to login page
        })
    } catch (error) {
        res.status(200).json({
            error: error.message
        })
        console.log(error)
    }
}

module.exports = activateAccount