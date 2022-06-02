const express = require('express')
const router = express.Router()
const authUser = require('../middleware/authUser')
const csurf = require('csurf')
const csrfProtection = csurf({cookie: {httpOnly: true}})

//controller functions
const getCandidatePage = require('../controllers/candidate/getCandidatePage')
const createCandidate = require('../controllers/candidate/createCandidate')


//GET
router.get('/', authUser, csrfProtection, getCandidatePage)

//POST
router.post('/add-candidate', authUser, csrfProtection, createCandidate)

module.exports = router