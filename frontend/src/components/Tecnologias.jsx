import React from 'react';
import Cards from './Cards'

import { Container, Span, SubTitle, CardsContainer } from './styles/Tecnologias';
import ReactLogo from '../images/react.svg'
import HTML from '../images/html5.svg'
import CSS from '../images/css3.svg'
import JS from '../images/javascript.svg'
import node from '../images/nodejs.svg'
import express from '../images/express.svg'
import postgreSQL from '../images/postgresql.svg'
import sequelize from '../images/Sequelize.svg'
import TS from '../images/typescript.svg'

export default function Tecnologias() {
  return (
  <Container id='Tecnologias'>
      <SubTitle>Tecnologías:</SubTitle>
      <Span>En esta sección les mencionaré las tecnologías que utilizo en mis proyectos.</Span>
      <CardsContainer>
        <Cards
          name='HTML'
          img={HTML}
        />
        <Cards
          name='CSS'
          img={CSS}
        />
        <Cards
          name='JavaScript'
          img={JS}
        />
        <Cards
          name='TypeScript'
          img={TS}
        />
        <Cards
          name='React'
          img={ReactLogo}
        />
        <Cards
          name='Node JS'
          img={node}
        />
        <Cards
          name='Express JS'
          img={express}
        />
        <Cards
          name='PostgreSQL y SQL'
          img={postgreSQL}
        />
        <Cards
          name='Sequelize'
          img={sequelize}
        />
      </CardsContainer>
    </Container>
  )
}