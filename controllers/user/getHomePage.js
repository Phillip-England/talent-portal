// @ GET
// @ '/user/home'
// @ PRIVATE
const getHomePage = async (req, res) => {
    if (req.user) {
        res.render('home.ejs', {
            user: req.user
        })
    } else {
        res.render('login.ejs', {
            activationMessage: false
        })
    }
}

module.exports = getHomePage