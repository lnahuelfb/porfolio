const express = require('express')
const nodemailer = require('nodemailer')
require('dotenv').config()
const cors = require('cors')

const app = express()

app.use(express.urlencoded({
  extended: false
}))

app.use(cors('*'))

app.use(express.json())

app.use((req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', '*');

  next();
})

app.post('/send-email', (req, res) => {

  const { name, company, subject, email, message } = req.body

  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.NODEMAILER_PORT,
    secure: process.env.SECURE,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  })

  const mailOptions = {
    from: name,
    to: 'lnahuelfernandezb@gmail.com',
    subject: subject,
    html: `
      <h1>Datos: </h1>
        <ul>
          <li>
          <bold>Nombre:</bold> ${name}
          </li>
          <li>
            <bold>Empresa:</bold> ${company}
          </li>
          <li>
            <bold>Email:</bold> ${email || 'No ha sido ingresado'}
          </li>
        </ul>
      <h1>Mensaje:</h1>
        ${message}
      `
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
  console.log(mailOptions)
  res.status(201)
    .send(`
    <script>
      window.alert('Mensaje envíado!')
      window.location.href = 'http://localhost:3000/#Contact'
    </script>
  `)
  transporter.close()
})

app.listen(process.env.PORT, () => {
  console.log(`Sever on port ${process.env.PORT}`)
})