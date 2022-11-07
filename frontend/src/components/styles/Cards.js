import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 75px;
  height: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 960px) {
    width: fit-content;
    align-content: center;
    border: 0;
  }
`

export const Name = styled.span`
  font-size: 20px;

  @media screen and (max-width: 350px) {
    font-size: 19px;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 75px;
  filter: grayscale(100%);

  :hover{
    transition: all 0.5s ease-out;
    filter: grayscale(0%)
  };
  
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const ImageContainer = styled.figure`
  width: 75px;
  height: 75px;
  margin: 0;
`