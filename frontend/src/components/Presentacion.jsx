import React from 'react'
import { Container, TextContainer, Text, Bold, ImageContainer, Img } from './styles/Presentacion'
import Programming from '../images/programming.png'

export default function Presentacion() {
  return (
    <Container id='Presentacion'>
        
      <TextContainer>
        <Text>
          <h1>Hola!</h1>
          Soy Nahuel Fernandez Beschtedt, <Bold>desarrollador Full Stack.</Bold> <br/>
          Desde niño me fascinó la web. Como día a día nos ayuda a estar al tanto de las noticias, a entretenernos y mas importante, para <Bold>Aprender!</Bold> 
        </Text>
      </TextContainer>
      <ImageContainer>
        <Img src={ Programming }/>
      </ImageContainer>
    </Container>
  )
}