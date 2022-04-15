import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: white; */
  background-color: #7510F7;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
  flex-direction: column;
  border-radius: 25px 25px 0 0;
  padding: 0 75px;

  @media screen and (max-width: 960px) and (min-width: 481px) {
    width: 100%;
  }

  @media screen and (max-width:480px) {
    width: 100%;
    padding: 0 10px;
  }
`

export const Title = styled.h2`
  display: block;
  text-align: center;
  margin-bottom: 0;
`

export const ProyectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 25px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`

export const Span = styled.span`
  font-size: 25px;
  margin-top: 15px;
  
`