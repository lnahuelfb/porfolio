import React from 'react'

import LogoImg from '../images/nahu.png'
import {Container, Logo, Navigation, Sections, Item, LinkStyled} from './styles/NavBar.js'

export default function NavBar() {

  return (
    <Container>
      <Logo src={LogoImg}/>
      <Navigation>
        <Sections>
          <Item>
            <LinkStyled href='#Presentacion'>
            ¿Quien Soy?
            </LinkStyled>
          </Item>
          
          <Item>
            <LinkStyled href='#Tecnologias'>
            Tecnologías
            </LinkStyled>
          </Item>

          <Item>
          <LinkStyled href='#Proyectos'>
            Proyectos
          </LinkStyled>
          </Item>
          
          <Item>
            <LinkStyled href='#Contacto'>
              Contacto
            </LinkStyled>
          </Item>
          
        </Sections>
      </Navigation>
    </Container>
  )
}