require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()

const todoRouter = require('./todo.router')

// set public folder
app.use(express.static('public'))

// adding body parser for all routes
app.use(express.json())

// route all calls to /api to todoRouter
app.use('/api', todoRouter)

// catch everything that doesn't go to the api
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

// connect the db and start the server
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, () => {
  app.listen(process.env.PORT || 8080, () => console.log('👍'))
})

