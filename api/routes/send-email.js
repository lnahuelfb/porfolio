const { Router } = require('express')
const nodemailer = require('nodemailer')
require('dotenv').config()

const router = Router()

router.get('/', (req, res) => res.send('Hola mundo!'))

router.post('/', (req, res) => {
  const { name, company, subject, email, message } = req.body

  const transporter = nodemailer.createTransport({
    port: process.env.NODEMAILER_PORT,
    host: process.env.HOST,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: process.env.SECURE,
    tls: {
      ciphers: 'TLS_AES_128_GCM_SHA256'
    }
  })

  const mailOptions = {
    from: name,
    to: process.env.TO,
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
      <h2>Mensaje:</h2>
        ${message}
      `
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      return res
        .status(500)
        .send(error.message)
    }
    console.log('Email enviado!')
    return res
      .status(200)
      .json(req.body)
  })
  transporter.close()
  return res.status(201)
})

module.exports = router