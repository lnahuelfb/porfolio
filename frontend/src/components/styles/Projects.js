import styled from 'styled-components';

export const Background = styled.div`
  background-color: #fff;
`

export const Container = styled.div`
  background-color: #7510F7;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
  flex-direction: column;
  border-radius: 50px 50px 0 0;
  padding: 0 75px;

  @media screen and (max-width: 960px) and (min-width: 481px) {
    width: 100%;
  }

  @media screen and (max-width:560px) {
    padding: 0 10px;
    border-radius: 25px 25px 0px 0px;
  }
`

export const Title = styled.h2`
  display: block;
  text-align: center;
  margin: 0;
  padding: 25px 0;
  padding-top: 75px;
`

export const ProjectContainer = styled.div`
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