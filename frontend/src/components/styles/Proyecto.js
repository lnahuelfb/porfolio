import styled from 'styled-components';

export const Card = styled.div`
  width: 30%;
  background-color: #d6d6d6;
  border: solid 1px black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`

export const Title = styled.h4`
  text-align: center;
`
export const Img = styled.img`
  width: 70%;
`
export const Description = styled.span`
  font-size: 20px;
  line-height: 20px;
`
export const Technologies = styled.span`
  font-weight: bold;
  text-align: left;
  margin-top: 25px;
  color: #000040;
`

export const Button = styled.button`
  width: 100%;
  cursor: pointer;
  border-radius: 7px;
  border: solid 1px #b0b0b0;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  background-color: white;
  :hover {
    background-color: #000040;
    color: white;
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