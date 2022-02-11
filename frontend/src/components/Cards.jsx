import React from 'react';

import { CardContainer, Name, Img } from './styles/Cards';

export default function Cards(props) {
  return (
    <CardContainer>
      <Name>{props.name}</Name>
      <Img src={props.img}/>
    </CardContainer>
  )
}