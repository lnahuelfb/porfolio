import React, {useState} from 'react'

import { Container, Logo, Sections, Item, LinkStyled, Wrapper, LogoContainer, MobileIcon, Background } from './styles/NavBar.js'

import {IconContext} from 'react-icons'
import { FaBars } from 'react-icons/fa'

import LogoImg from 'images/nahu.png'

export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <Background>
      <Container>
        <Wrapper>
          <IconContext.Provider
            value={{
              style: {
                fontSize: '2em'
              }
            }}>

          <a href="#top">
            <LogoContainer>
              <Logo src={LogoImg} alt='logo'/>
            </LogoContainer>
          </a>
              
            <MobileIcon onClick= {() => handleClick()}>
              <FaBars/>
            </MobileIcon>

          <Sections open={isOpen}>
            
              <Item>
                <LinkStyled href='#AboutMe' onClick={()=> handleClick()}>
                    ¿Quien Soy?
                </LinkStyled>
              </Item>
              
              <Item>
                <LinkStyled href='#Technologies' onClick={()=> handleClick()}>
                Tecnologías
                </LinkStyled>
              </Item>

              <Item>
              <LinkStyled href='#Projects' onClick={()=> handleClick()}>
                Proyectos
              </LinkStyled>
              </Item>
              
              <Item>
                <LinkStyled href='#Contact' onClick={()=> handleClick()}>
                  Contacto
                </LinkStyled>
              </Item>
              
            </Sections>
          </IconContext.Provider>
        </Wrapper>
      </Container>
    </Background>
  )
}




