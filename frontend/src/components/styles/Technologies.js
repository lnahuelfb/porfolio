import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  margin: 0;
  text-align: center;
  padding: 25px 75px;
  z-index: 0;

  @media screen and (max-width: 960px) and (min-width: 481px){
    width: 100%;
  }

  @media screen and (max-width:560px) {
    padding: 0 10px;
  }
`

export const SubTitle = styled.h2`
  text-align: center;
  margin: 0;
  padding: 25px;
  padding-top: 75px;
`

export const Span = styled.span`
  font-size: 20px;
  line-height: 20px;
`

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 55px;
  padding-bottom: 30px;
  align-items: center;
  gap: 100px;

  @media screen and (max-width:320px) {
    align-items: center;
    gap: none;
  }
`