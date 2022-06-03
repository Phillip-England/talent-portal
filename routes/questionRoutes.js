const express = require('express')
const router = express.Router()
const authUser = require('../middleware/authUser')
const csurf = require('csurf')
const csrfProtection = csurf({cookie: {httpOnly: true}})

//controllers
const getQuestionPage = require('../controllers/question/getQuestionPage')

//GET
router.get('/', authUser, csrfProtection, getQuestionPage)

//POST

module.exports = router