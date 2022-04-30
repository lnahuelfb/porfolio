import React, { useState } from 'react'

import { Container, FormContainer, Form, Label, Input, TextArea, Button, SubTitle } from './styles/Contact'

export default function Contact() {

  const [input, setInput] = useState({
    name: '',
    company: '',
    subject: '',
    email: '',
    message: '',
  })

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container id='Contact'>
      <SubTitle>
        Si estas interesado en contactarme podes hacerlo mediante este formulario:
      </SubTitle>
    
      <FormContainer>
        <Form action='https://node-express-mailer.herokuapp.com/send-email' method='POST'> 
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
            
          <Button type="submit" >Enviar</Button>
        </Form>

      </FormContainer>
    </Container>
  )
}