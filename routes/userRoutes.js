const express = require('express')
const router = express.Router()
const authUser = require('../middleware/authUser')
const csurf = require('csurf')
const csrfProtection = csurf({cookie: {httpOnly: true}})

//controller functions
const createUser = require('../controllers/user/createUser')
const getLoginPage = require('../controllers/user/getLoginPage')
const loginUser = require('../controllers/user/loginUser')
const activateAccount = require('../controllers/user/activateAccount')
const deleteAllUsers = require('../controllers/user/deleteAllUsers')
const deleteAllEmailActivations = require('../controllers/user/deleteAllEmailActivations')
const getHomePage = require('../controllers/user/getHomePage')


//GET
router.get('/login', getLoginPage)
router.get('/activate/:randomString', activateAccount)
router.get('/delete/all', deleteAllUsers)
router.get('/activate/delete/all', deleteAllEmailActivations)
router.get('/home', authUser, csrfProtection, getHomePage)

//POST
router.post('/register', createUser)
router.post('/login', loginUser)

module.exports = router