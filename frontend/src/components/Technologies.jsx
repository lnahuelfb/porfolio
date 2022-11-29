import React, { useEffect, useState } from 'react';
import Cards from './Cards'

import { Container, Span, SubTitle, CardsContainer } from './styles/Technologies';

export default function Technologies() {

  const [data, setData] = useState()

  const fetchData = async () => {
    const techs = await fetch('/api/data')
    const data = await techs.json()
    console.log(data)
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container id='Technologies'>
      <SubTitle>Tecnologías:</SubTitle>
      <Span>En esta sección les mencionaré las tecnologías que utilizo en mis proyectos.</Span>
      <CardsContainer>
        {
          data && data.map(({ name, img }) => <Cards key={name} name={name} img={img} />)
        }
      </CardsContainer>
    </Container>
  )
}