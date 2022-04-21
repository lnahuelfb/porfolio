import React from 'react';

import { Container, ProjectContainer, Title, Span } from './styles/Projects'
import ProjectCard from './ProjectCard';
import { projects } from '../data';

export default function Projects() {
  return (
    <Container id='Projects'>
      <Title>Proyectos individuales:</Title>

      <Span>
        Actualmente no cuento con experiencia profesional, pero aquí te dejo mis proyectos individuales para demostrar mis conocimientos en las distintas tecnologías.
      </Span>

      <ProjectContainer>

        {
          projects.map(proyect => (
            <ProjectCard
              key={proyect.title}
              title={proyect.title}
              description={proyect.description}
              img={proyect.img}
              link={proyect.link}
              technologies={proyect.technologies}
            />
          ))
        }
        
      </ProjectContainer>
    </Container>
  )
}