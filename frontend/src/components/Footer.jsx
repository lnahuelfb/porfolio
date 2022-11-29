import React from 'react';

import { Container, SocialContainer, LogoContainer, Img, Span } from './styles/Footer'

import Linkedin from 'images/linkedin.svg'
import GitHub from 'images/white-github.png'
import WhatsApp from 'images/whatsApp.png'
import Logo from 'images/nahu.png'

export default function Footer() {
  return (
    <Container>
      <LogoContainer>
        <Img src={Logo} alt='logo del footer'/>
        <Span>Nahuel Fernandez Beschtedt</Span>
      </LogoContainer>
      <SocialContainer>
        <a href='https://www.linkedin.com/in/nahuel-fernandez-beschtedt/' target='_blank' rel="noopener noreferrer">
          <Img src={Linkedin} alt="LinkedIn" loading="lazy"/>
        </a>

        <a href="https://github.com/lnahuelfb" target='_blank' rel="noopener noreferrer">
          <Img src={GitHub} alt='GitHub' loading="lazy"/>
        </a>

        <a href="https://api.whatsapp.com/send?phone=541163783961" target='_blank' rel="noopener noreferrer">
          <Img src={WhatsApp} alt='WhatsApp' loading="lazy"/>
        </a>
      </SocialContainer>
    </Container>
  )
}