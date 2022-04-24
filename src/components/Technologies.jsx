import React, { useState, useEffect } from 'react';
import Cards from './Cards'

import { Container, Span, SubTitle, CardsContainer } from './styles/Technologies';
// import { techs } from '../data';

export default function Technologies() {

  const [techs, setTechs] = useState([]);
  const API = 'https://node-express-mailer.herokuapp.com/technologies';

  const fetchTechs = async (API) => {
    const response = await fetch(API)
    const data = await response.json()
    setTechs(data)
  }

  useEffect(() => {
    fetchTechs(API)
  }, [])

  return (
  <Container id='Technologies'>
      <SubTitle>Tecnologías:</SubTitle>
      <Span>En esta sección les mencionaré las tecnologías que utilizo en mis Projects.</Span>
      <CardsContainer>
        {
          techs
            ? techs.map(tech => (
                <Cards
                key={tech.name}
                name={tech.name}
                img={tech.img}
                />
            ))
            : <p>Cargando...</p>
        }
      </CardsContainer>
    </Container>
  )
}