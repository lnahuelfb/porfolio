import React, { useState, useEffect }from 'react';

import { Container, ProjectContainer, Title, Span } from './styles/Projects'
import ProjectCard from './ProjectCard';

export default function Projects() {

  const [Projects, setProjects] = useState([])
  const API = 'https://node-express-mailer.herokuapp.com/projects'

  const fetchProjects = async (API) => {
    const response = await fetch(API)
    const data = await response.json()
    setProjects(data)
  }
  
  useEffect(() => {
    fetchProjects(API)
  }, [])

  return (
    <Container id='Projects'>
      <Title>Proyectos individuales:</Title>

      <Span>
        Actualmente no cuento con experiencia profesional, pero aquí te dejo mis proyectos individuales para demostrar mis conocimientos en las distintas tecnologías.
      </Span>

      <ProjectContainer>

        {
          Projects
            ? Projects.map(proyect => (
              <ProjectCard
                key={proyect.title}
                title={proyect.title}
                description={proyect.description}
                img={proyect.img}
                link={proyect.link}
                technologies={proyect.technologies}
                github={proyect.github}
              />
            ))
            : <p>Cargando...</p>
        }
        
      </ProjectContainer>
    </Container>
  )
}