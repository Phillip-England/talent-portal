const User = require('../../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookies = require('../../service/cookies')

// @ POST
// @ '/user/login'
// @ PUBLIC
const loginUser = async (req, res) => {
    try {
        //getting our data from req.body
        const {email, password} = req.body
        //checking if we got an email
        if (!email) {
            throw new Error('Please provide an email')
        }
        //checking if we got a password
        if (!password) {
            throw new Error('Please provide a password')
        }
        //getting the user associated with our email
        const user = await User.findOne({email:email})
        //checking if a user was found
        if (!user) {
            throw new Error('No user associated with given email')
        }
        //checking if the username and password come from the same user
        if (user && (await bcrypt.compare(password, user.password))){
            //creating a jwt token
            const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
            //creating a cookie with our jwt token stored inside
            const jwtCookie = cookies.jwtToken(res, token)
            //creating a refresh token to keep our user logged in
            const refreshCookie = cookies.refreshToken(res, token)
            //redirecting to our homepage
            res.redirect('/user/home')
        } else {
            throw new Error('Invalid email and password')
        }
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
        console.log(error.message)
    }
}

module.exports = loginUser