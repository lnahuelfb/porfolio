import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-left: 1px solid #b0b0b0;
  border-right: 1px solid #b0b0b0;
  margin-top: 25px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 960px) {
    width: fit-content;
    align-content: center;
    border: 0;
  }
`

export const Name = styled.span`
  font-size: 24px;
  font-weight: bold;
`

export const Img = styled.img`
  margin-top: 20px;
  max-width: 70%;
  max-height: 175px;
  
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`