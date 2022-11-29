import React from 'react'

import { Background, Container, TextContainer, Text, Bold, ImageContainer, Img, Button } from './styles/Presentation'

import Photo from 'images/photo.jpg'

export default function AboutMe() {
  return (
    <Background>
      <Container>
        <TextContainer>
          <Text>
            <h1>Hola!</h1>
            Soy Nahuel Fernandez Beschtedt, <Bold>desarrollador Full Stack.</Bold> <br/>
            Desde niño me fascinó la web. Como día a día nos ayuda a estar al tanto de las noticias, a entretenernos y mas importante, para <Bold>Aprender!</Bold> 
          </Text>
          <a href="https://drive.google.com/file/d/13z2AHUU7dYcgyx8JgUogtjc004Gx1WPA/view?usp=sharing" target='_blank' rel="noopener noreferrer">
            <Button >
              Mirá mi Curriculum!
            </Button>
          </a>
        </TextContainer>
        <ImageContainer>
          <Img src={ Photo } alt='imagen' loading="lazy"/>
        </ImageContainer>
      </Container>
    </Background>
  )
}