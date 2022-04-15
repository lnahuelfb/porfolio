import React, {useState} from 'react'

import LogoImg from '../images/nahu.png'
import { Container, Logo, Sections, Item, LinkStyled, Wrapper, LogoContainer, MobileIcon } from './styles/NavBar.js'
import {IconContext} from 'react-icons'
import {FaBars} from 'react-icons/fa'
export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider
          value={{
            style: {
              fontSize: '2em'
            }
          }}>

        <LogoContainer>
          <Logo src={LogoImg}/>
        </LogoContainer>
            
          <MobileIcon onClick= {() => handleClick()}>
            <FaBars/>
          </MobileIcon>

        <Sections open={isOpen}>
          
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
        </IconContext.Provider>
      </Wrapper>
    </Container>
  )
}