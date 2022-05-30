const express = require('express')
const router = express.Router()

//controller functions
const createUser = require('../controllers/user/createUser')
const getLoginPage = require('../controllers/user/getLoginPage')
const loginUser = require('../controllers/user/loginUser')
const activateAccount = require('../controllers/user/activateAccount')
const getActivationPage = require('../controllers/user/getActivationPage')


//GET
router.get('/login', getLoginPage)
router.get('/activate/:randomString', activateAccount)
router.get('/activation-page', getActivationPage)

//POST
router.post('/register', createUser)
router.post('/login', loginUser)

module.exports = router