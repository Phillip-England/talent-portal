const express = require('express')
const router = express.Router()
const createUser = require('../controllers/user/createUser')
const getLoginPage = require('../controllers/user/getLoginPage')


router.get('/', getLoginPage)
router.post('/register', createUser)

module.exports = router