const express = require('express')
const router = express.Router()
const authUser = require('../middleware/authUser')
const csurf = require('csurf')
const csrfProtection = csurf({cookie: {httpOnly: true}})

const getQuestionPage = require('../controllers/question/getQuestionPage')
const createQuestion = require('../controllers/question/createQuestion')
const deleteQuestion = require('../controllers/question/deleteQuestion')

router.get('/', authUser, csrfProtection, getQuestionPage)

router.post('/create/:step', authUser, csrfProtection, createQuestion)

router.delete('/delete/:question', authUser, deleteQuestion)

module.exports = router