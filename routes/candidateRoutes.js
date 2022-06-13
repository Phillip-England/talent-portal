const express = require('express')
const router = express.Router()
const authUser = require('../middleware/authUser')
const csurf = require('csurf')
const csrfProtection = csurf({cookie: {httpOnly: true}})

//controller functions
const getCandidatePage = require('../controllers/candidate/getCandidatePage')
const createCandidate = require('../controllers/candidate/createCandidate')
const updateCandidate = require('../controllers/candidate/updateCandidate')

//GET
router.get('/', authUser, csrfProtection, getCandidatePage)

//POST
router.post('/create-candidate', authUser, csrfProtection, createCandidate)
router.post('/update/:candidate', authUser, csrfProtection, updateCandidate)

module.exports = router