// @ GET
// @ '/'
// @ PUBLIC
const getLoginPage = (req, res) => {
    res.render('login.ejs', {
        NODE_ENV: process.env.NODE_ENV
    })
}

module.exports = getLoginPage