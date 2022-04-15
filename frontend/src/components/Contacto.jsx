import React, { useState } from 'react'

import { Container, FormContainer, Form, Label, Input, TextArea, Button, SubTitle } from './styles/Contacto'

export default function Contacto() {

  const [input, setInput] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  })

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Container id='Contacto'>
      <SubTitle>
        Si desea contactarme puede hacerlo mediante este formulario:
      </SubTitle>
    
    <FormContainer>
      <Form action='http://localhost:3001/send-email' method='POST'>
        <Label>Nombre:</Label>
          <Input
            type='text'
            placeholder='Nombre'
            name='name'
            onChange={handleInputChange}
            value={input.name}
          />
          
        <Label>Empresa:</Label>
          <Input
            type='text'
            placeholder='Empresa'
            name='company'
            onChange={handleInputChange}
            value={input.company}
          />
          
        <Label>Email:</Label>
          <Input
            type='email'
            placeholder='Email'
            name='email'
            onChange={handleInputChange}
            value={input.email}
          />
          
        <Label>Mensaje:</Label>
          <TextArea
            name='message'
            placeholder='Escriba aquí su mensaje...'
            value={input.message}
            onChange={handleInputChange}
          />
          
        <Button type="submit">Enviar</Button>
      </Form>

    </FormContainer>
    </Container>
  )
}