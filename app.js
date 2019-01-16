 require('./config/config.js')
require('./models/db')
require('./config/passportConfig')
const path = require('path')

const passport= require('passport')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const rtxUser = require('./routes/index.route')

var app =express()
var Port = process.env.PORT || 4600

app.use(bodyParser.json() ) 
app.use(passport.initialize())
app.use(express.static(path.join(__dirname, 'dist')))
app.use(cors())
app.use('/api', rtxUser )
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})


app.listen(Port, () => {
  console.log(`Server Started on Port ${Port}`)  
})
