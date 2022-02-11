import React from 'react';

import { Container, ProyectContainer, Title, Span } from './styles/Proyectos'
import Proyecto from './Proyecto';

import PokeRandom from '../images/PokeRandom.png'

export default function Proyectos() {
  return (
    <Container id='Proyectos'>
      <Title>Proyectos individuales:</Title>

      <Span>
        Actualmente no cuento con experiencia profesional, pero aquí te dejo mis proyectos individuales para demostrar mis conocimientos en las distintas tecnologías.
      </Span>

      <ProyectContainer>

        <Proyecto
          title='PokeRandom'
          img={PokeRandom}
          description='Una aplicación donde al tocar un boton te devuelve un pokemon al azar'
          technologies='Hecho con: HTML, Styled Components, JS y React'
          link="https://github.com/lnahuelfb/PokeRandom-React"
        />
        <Proyecto
          title='PokeRandom vanilla JS'
          img={PokeRandom}
          description='Es la misma app que PokeRandom, pero con Vanilla JS. No me centré en el diseño'
          technologies='Hecho con: HTML, CSS, JS'
          link='https://github.com/lnahuelfb/PokeRandom-js-vanila'
        />
        
      </ProyectContainer>
    </Container>
  )
}