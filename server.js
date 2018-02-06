require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const app = express()

const todoRouter = require('./routes')

// set public folder
app.use(express.static('public'))

// adding body parser for all routes
app.use(bodyParser.json())

// route all calls to /api to todoRouter
app.use('/api', todoRouter)

// ignore the favicon
app.get('/favicon.ico', (req, res) => {
    res.status(204);
})

// catch everything that doesn't go to the api
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

mongoose.connect(process.env.DB_URL, () => {
  app.listen(8080, () => 'listening')  
})

