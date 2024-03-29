import styled from 'styled-components';

export const Background = styled.div`
  background-color: #fff;
  height: auto;
`

export const Container = styled.div`
  background-color: #7510F7;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 0 0 50px 50px;
  margin: auto;
  padding: 0 75px 10px 75px;

  @media screen and (max-width: 960px) and (min-width: 481px){
    flex-direction: column-reverse;
    width: 100%;
  }

  @media screen and (max-width: 560px) {
    flex-direction: column-reverse;
    padding: 0 10px;
    border-radius: 0px 0px 25px 25px;
  }
`
export const TextContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    align-items: center;
  }
`

export const Text = styled.span`
  text-align: left;
  font-size: 25px;
`

export const ImageContainer = styled.div`
  height: 400px;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: unset;
    height: auto;
  }
`

export const Img = styled.img`
 height: 75%;
 border-radius: 50%;
 border: 3px solid white;
`

export const Bold = styled.span`
  font-weight: bold;
`

export const Button = styled.button`
  height: 50px;
  border-radius: 25px;
  width: 200px;
  background-color: white;
  color: #7510F7 ;
  margin: 25px 0;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  border: 0;
  &:hover {
    background-color: transparent;
    color: white;
    border: 2px solid white;
  }
`