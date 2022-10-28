import styled from 'styled-components';

export const SubTitle = styled.h3`
  text-align: center;
  margin-top: 0;
  padding-top: 75px;
`

export const Container = styled.div`
  background-color: #7510F7;
  color: white;
  padding: 0 75px;

  @media screen and (max-width: 960px) and (min-width: 561px) {
    width: 100%;
  }

  @media screen and (max-width: 560px) {
    padding: 0 10px;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 25px;
`

export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const Input = styled.input`
  width: 100;
  height: 25px;
  border-radius: 5px;
  margin-top: 5px;
  caret-color: #7510F7;
  padding: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
`

export const Label = styled.label`
  font-weight: 700;
  margin: 10px 0 10px 0;
`

export const TextArea = styled.textarea`
  max-width: 100%;
  min-height: 75px;
  height: 75px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  caret-color: #7510F7;
  padding: 5px; 
  &:focus {
    outline: none;
  }
  `

export const Button = styled.button`
  width: 25%;
  height: 35px;
  margin-top: 20px;
  border-radius: 7px;
  color: #7510F7;
  background-color: white;
  font-weight: bold;
  border: 0;
  cursor: pointer;
  &:hover{
    background-color: #7510F7;
    color: white;
    border: 2px solid white;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`