import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: #000022; */
  background-color: #7510F7;
  height: 75px;
  display: flex;
  align-items: center;
  padding: 0 75px;

  @media screen and (max-width: 960px) and (min-width: 481px) {
    width: 100%;
    height: fit-content;
    justify-content: center;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0 10px;
    height: fit-content;
    justify-content: center;
    flex-direction: column;
  }
`

export const LogoContainer = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    justify-content: space-evenly;
  }
`

export const SocialContainer = styled.div`
  width: 67%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    justify-content: space-between;
    margin: 20px 0;
  }
`

export const Img = styled.img`
  width: 40px;
  margin: 0 10px;

  @media screen and (max-width: 960px) {
    display: block;
    width: 75px;
    margin: 0
  }
`
export const Span = styled.span`
  color: white;
  font-weight: bold;
  margin-left: 15px;
  font-size: 15px;

  @media screen and (max-width: 960px) {
    text-align: center;
    margin-left: 0;
  }
`