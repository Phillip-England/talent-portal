const express = require('express')
const router = express.Router()

const {
    loginPage,
    loginUser,
    registerUser,
} = require('../controllers/userController')

router.get('/', loginPage)
router.post('/login', loginUser)
router.post('/register', registerUser)

module.exports = router