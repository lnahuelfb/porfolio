import React from 'react';
import Cards from './Cards'

import { Container, Span, SubTitle, CardsContainer } from './styles/Technologies';
import { techs } from 'data';

export default function Technologies() {

  return (
    <Container id='Technologies'>
      <SubTitle>Tecnologías:</SubTitle>
      <Span>En esta sección les mencionaré las tecnologías que utilizo en mis proyectos.</Span>
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