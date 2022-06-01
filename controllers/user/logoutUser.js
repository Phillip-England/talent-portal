//@ GET
//@ /user/logout
//@ PUBLIC
const logoutUser = (req, res) => {
    res.clearCookie('jwt_token')
    res.clearCookie('refresh_token')
    res.redirect('/user/login')
}

module.exports = logoutUser
