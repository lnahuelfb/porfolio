import React from 'react';

import { Card, Title, Img, TextContainer, Description, Technologies, A, Button } from './styles/Proyecto';

export default function Proyecto(props) {
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
          Repositorio de {props.title}
        </Button>
      </A>
    </Card>
  )
}