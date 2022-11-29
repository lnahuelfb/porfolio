const express = require('express')
require('dotenv').config()
const path = require('path')
const sendEmail = require('./routes/send-email')
const data = require('./routes/data')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/', express.static((path.join(__dirname, '../frontend/build'))))

app.use('/api/send-email', sendEmail)
app.use('/api/data', data)

app.listen(PORT, () => {
  console.log(`Sever on port ${PORT}`)
})