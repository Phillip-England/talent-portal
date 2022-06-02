const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const cookies = require('../service/cookies')


const authUser = async (req, res, next) => {
    try {
        //checking if our cookie has expired AND if our refresh token is still active
        //if the user stays inactive for 5 minutes after the original JWT expires, then the refresh token will expire as well
        if (req.signedCookies.jwt_token == undefined && req.signedCookies.refresh_token != undefined){
            //getting the user from the refresh token
            const decoded = jwt.verify(req.signedCookies.refresh_token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded._id).select('-password')
            //creating a new jwt token
            const token = jwt.sign({_id: req.user._id}, process.env.JWT_SECRET)
            //creating a new jwt_token cookie
            cookies.jwtToken(res, token)
            //deleting our refresh cookie
            res.clearCookie('refresh_token')
            //creating a new refresh token
            cookies.refreshToken(res, token)
            //going to our next function attached to our route
            next()
        } else {
            //if our jwt token is not expired, simply get our user from the token and move forward
            const decoded = jwt.verify(req.signedCookies.jwt_token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded._id).select('-password')
            next()
        }
    } catch (error) {
        //if our jwt_token and our refresh_token have expired, go back to login page
        res.redirect('/user/login')
    }
    
}

module.exports = authUser