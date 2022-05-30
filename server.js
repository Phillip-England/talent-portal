const express = require('express')
const dotenv = require('dotenv').config()
const path = require('path')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')

connectDB()

// configuration
const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views/pages'))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use('/user', require('./routes/userRoutes'))

//catching all bad routes and sending user home
app.get('*', (req, res) => {
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})