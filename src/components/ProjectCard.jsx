import React from 'react';

import { Card, Title, Img, TextContainer, Description, Technologies, A, Button } from './styles/ProjectCard';

export default function ProjectCard({title, img, description, technologies, github, link}) {
  return (
    <Card>
      <Title>{title}</Title>
      <Img src={img} alt={title} />
      <TextContainer>
        <Description>{description}</Description>
        <Technologies>Hecho con: {technologies.join(', ')}.</Technologies>
      </TextContainer>
      <A href={github} target='_blank' rel="noopener noreferrer">
        <Button>
          Ingresa al repositorio
        </Button>
      </A>
      {
        link
          ?
          <>
            <A href={link} target='_blank' rel="noopener noreferrer">
              <Button>
                Ver el proyecto
              </Button>
            </A>
          </>
          : null
      }
    </Card>
  )
}