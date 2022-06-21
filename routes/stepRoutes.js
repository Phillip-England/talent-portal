const express = require('express')
const router = express.Router()
const authUser = require('../middleware/authUser')
const csurf = require('csurf')
const csrfProtection = csurf({cookie: {httpOnly: true}})

const createStep = require('../controllers/steps/createStep')
const deleteStep = require('../controllers/steps/deleteStep')

router.post('/create', authUser, csrfProtection, createStep)

router.delete('/delete/:step', authUser, deleteStep)


module.exports = router