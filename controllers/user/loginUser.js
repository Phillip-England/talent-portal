const User = require('../../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookies = require('../../service/cookies')

// @ POST
// @ '/user/login'
// @ PUBLIC
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body
        if (!email) {
            throw new Error('Please provide an email')
        }
        if (!password) {
            throw new Error('Please provide a password')
        }
        const user = await User.findOne({email:email})
        if (!user) {
            throw new Error('No user associated with given email')
        }
        if (user && (await bcrypt.compare(password, user.password))){
            const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
            const jwtCookie = cookies.jwtToken(res, token, 30)
            const refreshCookie = cookies.refreshToken(res, token, 45)
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