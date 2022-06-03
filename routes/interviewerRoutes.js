const express = require('express')
const router = express.Router()
const authUser = require('../middleware/authUser')
const csurf = require('csurf')
const csrfProtection = csurf({cookie: {httpOnly: true}})

//controllers
const getInterviewerPage = require('../controllers/interviewer/getInterviewerPage')

//GET
router.get('/', authUser, csrfProtection, getInterviewerPage)

//POST

module.exports = router