import React from 'react';

import { Card, Title, Img, TextContainer, Description, Technologies, A, Button } from './styles/ProjectCard';

export default function ProjectCard(props) {
  return (
    <Card>
      <Title>{props.title}</Title>
      <Img src={props.img} alt={props.alt} />
      <TextContainer>
        <Description>{props.description}</Description>
        <Technologies>{props.technologies}</Technologies>
      </TextContainer>
      <A href={props.link} target='_blank' rel="noopener noreferrer">
        <Button>
          Ingresa al repositorio
        </Button>
      </A>
    </Card>
  )
}