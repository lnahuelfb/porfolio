import React from 'react';

import { CardContainer, Name, ImageContainer, Img } from './styles/Cards';

export default function Cards({ name, img }) {
  return (
    <CardContainer>
      <Name>{name}</Name>
      <ImageContainer>
        <Img src={img} alt={name} loading="lazy"/>
      </ImageContainer>
    </CardContainer>
  )
}