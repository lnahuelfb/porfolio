const express = require('express')
require('dotenv').config()
const path = require('path')
const sendEmail = require('./routes/send-email')

const app = express()

app.use(express.json())

app.use('/', express.static((path.join(__dirname, '../frontend/build'))))

app.use('/send-email', sendEmail)

app.listen(process.env.PORT || 3000, () => {
  console.log(`Sever on port ${process.env.PORT || 3000}`)
})