import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  margin-bottom: 25px;
  text-align: center;
  padding: 0 75px;

  @media screen and (max-width: 960px) and (min-width: 481px){
    width: 100%;
  }

  @media screen and (max-width:480px) {
    width: 100%;
    padding: 0 10px;
  }
`

export const SubTitle = styled.h2`
  text-align: center;
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
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 960px) {
    /* justify-content: center;
    align-items: center; */
  }
`