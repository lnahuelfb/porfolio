import styled from 'styled-components';

export const Card = styled.div`
  width: 40%;
  background-color: white;
  color: #7510F7;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const Title = styled.h4`
  text-align: center;
`
export const Img = styled.img`
  width: 70%;
  height: 100px;
  object-fit: contain;
`
export const Description = styled.span`
  font-size: 20px;
  line-height: 20px;
`
export const Technologies = styled.span`
  font-weight: bold;
  text-align: left;
  margin-top: 15px;
  color: #7510F7;
`

export const Button = styled.button`
  width: 100%;
  height: 25px;
  cursor: pointer;
  border-radius: 7px;
  border: solid 1px #b0b0b0;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  background-color: #7510F7;
  color: white;
  :hover {
    background-color: white;
    color: #7510F7;
  }
`
export const A = styled.a`
  width: 50%;
  margin-bottom: 21.28px;
`

export const TextContainer = styled.div`
  width: 90%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 7px;
  word-wrap: word-break;
  overflow: hidden;
`