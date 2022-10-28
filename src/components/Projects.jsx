import React from 'react';

import { Background, Container, ProjectContainer, Title, Span } from './styles/Projects'
import ProjectCard from 'components/ProjectCard';

import { projects } from 'data';

export default function Projects() {

  return (
    <Background>
      <Container id='Projects'>
        <Title>Proyectos individuales:</Title>

        <Span>
          Actualmente no cuento con experiencia profesional, pero acá te dejo mis proyectos como freelance e individuales para demostrar mis conocimientos en las distintas tecnologías.
        </Span>

        <ProjectContainer>
          {
            projects && projects.map(({ title, description, img, link, technologies, github }) => (
              <ProjectCard
                key={title}
                title={title}
                description={description}
                img={img}
                link={link}
                technologies={technologies}
                github={github}
              />
            ))
          }
        </ProjectContainer>
      </Container>
    </Background>
  )
}