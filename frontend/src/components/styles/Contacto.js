import styled from 'styled-components';

export const SubTitle = styled.h3`
  text-align: center;
  margin-top: 0;
  padding-top: 25px;
`

export const Container = styled.div`
  background-color: #7510F7;
  color: white;
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
`

export const Input = styled.input`
  width: 100;
  height: 25px;
  border-radius: 5px;
  margin-top: 5px;
`

export const TextArea = styled.textarea`
  max-width: 100%;
  min-height: 75px;
  height: 75px;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
`

export const Button = styled.button`
  width: 25%;
  height: 30px;
  margin-top: 20px;
  border-radius: 7px;
  color: #7510F7;
  background-color: white;
  &:hover{
    background-color: #7510F7;
    color: white;
  }
`