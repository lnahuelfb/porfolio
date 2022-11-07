import React, { useState } from 'react'

import { Container, FormContainer, Form, Label, Input, TextArea, Button, SubTitle, ButtonLoading } from './styles/Contact'

export default function Contact() {

  const [input, setInput] = useState({
    name: '',
    company: '',
    subject: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: {
          'Acept': 'application/json',
          'Content-Type': 'application/json'
        }
      })

      setLoading(false)

      if (!response.ok) throw new Error('Algo salió mal :c')

      return window.alert('Email enviado!')

    } catch (error) {

      setLoading(false)
      console.log(error)
    }
  }

  return (
    <Container id='Contact'>
      <SubTitle>
        Si estas interesado en contactarme podes hacerlo mediante este formulario:
      </SubTitle>

      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Label>Nombre:</Label>
          <Input
            type='text'
            placeholder='Nombre'
            name='name'
            onChange={handleInputChange}
            value={input.name}
            required
          />

          <Label>Empresa:</Label>
          <Input
            type='text'
            placeholder='Empresa'
            name='company'
            onChange={handleInputChange}
            value={input.company}
          />

          <Label>Motivo del mensaje:</Label>
          <Input
            type='text'
            placeholder='Motivo del mensaje'
            name='subject'
            onChange={handleInputChange}
            value={input.subject}
          />

          <Label>Email:</Label>
          <Input
            type='email'
            placeholder='Email'
            name='email'
            onChange={handleInputChange}
            value={input.email}
            required
          />

          <Label>Mensaje:</Label>
          <TextArea
            name='message'
            placeholder='Escriba aquí su mensaje...'
            value={input.message}
            onChange={handleInputChange}
            required
          />

          {
            loading
              ? <ButtonLoading>Enviando...</ButtonLoading>
              : <Button type="submit" onSubmit={handleSubmit}>Enviar</Button>
          }

        </Form>

      </FormContainer>
    </Container>
  )
}