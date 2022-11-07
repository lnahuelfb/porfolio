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
          techs && techs.map(({ name, img }) => <Cards key={name} name={name} img={img} />)
        }
      </CardsContainer>
    </Container>
  )
}