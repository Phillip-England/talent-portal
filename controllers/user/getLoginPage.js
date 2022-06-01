const User = require('../../models/userModel')
const jwt = require('jsonwebtoken')

// @ GET
// @ '/user/login'
// @ PUBLIC
const getLoginPage = async (req, res) => {
    //checking if we have a cookie
    if (req.signedCookies.jwt_token){
        const decoded = jwt.verify(req.signedCookies.jwt_token, process.env.JWT_SECRET)
        const user = await User.findById(decoded._id).select('-password')
        res.render('home.ejs', {
            user: user
        })
    } else {
        res.render('login.ejs', {
            activationMessage: false
        })
    }
}

module.exports = getLoginPage