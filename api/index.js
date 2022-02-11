const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

app.use(express.urlencoded({
  extended: false
}))
app.use(express.json())

app.post('/send-email', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    post: '587',
    secure: false,
    auth: {
      user: 'kari.brekke92@ethereal.email',
      pass: 'TKzWR7CgFtDJk32CNq'
    }
  })

  const mailOptions = {
    from: 'Remitente',
    to: 'lnahuelfernandezb@gmail.com',
    subject: 'Enviado desde nodemailer',
    text: 'Hola mundo!'
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res
        .status(500)
        .send(error.message)
    }

    console.log('Email enviado!')
    res
      .status(200)
      .json(req.body)
  })
  console.log(req.body)
  res.send('Recibido')
})

app.listen(3001, () => {
  console.log('Sever on port 3001')
})