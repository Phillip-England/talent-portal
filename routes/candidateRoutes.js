const express = require('express')
const router = express.Router()
const authUser = require('../middleware/authUser')
const csurf = require('csurf')
const csrfProtection = csurf({cookie: {httpOnly: true}})

//controller functions
const getCandidatePage = require('../controllers/candidate/getCandidatePage')


//GET
router.get('/', authUser, csrfProtection, getCandidatePage)

//POST

module.exports = router