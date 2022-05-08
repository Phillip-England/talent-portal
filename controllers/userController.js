
// @ '/'
// @ GET
// @ PUBLIC
const loginPage = (req, res) => {
    res.render('login.ejs', {
        NODE_ENV: process.env.NODE_ENV
    })
}

// @ '/login'
// @ POST
// @ PUBLIC
const loginUser = (req, res) => {
    const {username, password} = req.body
    console.log(username, password)
}

// @ '/register'
// @ POST
// @ PUBLIC
const registerUser = (req, res) => {
    const {email, username, password} = req.body
    console.log(email, username, password)
}

module.exports = {
    loginPage,
    loginUser,
    registerUser,
}