import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 75px;
  height: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* border-left: 1px solid #b0b0b0;
  border-right: 1px solid #b0b0b0; */
  /* margin-top: 25px;
  padding-top: 20px;
  padding-bottom: 20px; */

  hover + Name{
    display: block;
  };

  @media screen and (max-width: 960px) {
    width: fit-content;
    align-content: center;
    border: 0;
  }
`

export const Name = styled.span`
  font-size: 24px;
  font-weight: bold;
  display: none;
`

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  filter: grayscale(100%);

  :hover{
    transition: all 0.5s ease-out;
    filter: grayscale(0%)
  };
  
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`