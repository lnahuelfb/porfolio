import styled from 'styled-components';

// import { Link } from 'react-router-dom'

export const LinkStyled = styled.a`
  height: 75px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: 'none';
  color: white;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
    }
`

export const Container = styled.div`
  width: 100%;
  height: 75px;
  background-color: #000022;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
`

export const Logo = styled.img`
  margin-left: 70px;
  height: 60px;
  justify-content: start;
  cursor: pointer;
`
export const Navigation = styled.div`
  display: flex;
  color: white;
  width: 100%;
  height: 100%;
  padding-left: 40%;
`
export const Sections = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  list-style:none;
  margin: 0;
`
export const Item = styled.li`
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  position: relative;
    :before {
    content:"";
    height: 5px;
    width: 0%;
    background: white;
    position: absolute;
    left: 0;
    bottom: 0px;
    transition: 0.4s ease-out;
  }
  &:hover:before {
   width: 100%;
 }
 &:hover {
   backdrop-filter:contrast(40%) ;
 }
`