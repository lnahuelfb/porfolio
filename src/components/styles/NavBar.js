import styled from 'styled-components';

export const Container = styled.div`
  height: 75px;
  /* background-color: #000022; */
  background-color: #7510F7;
  display: flex;
  align-items: center;
  padding: 0 75px;
  position: sticky;
  top: 0;

  @media screen and (max-width: 960px) and (min-width: 481px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0 10px;
  }
  `

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  height: 60px;
  cursor: pointer;
`

export const Sections = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style:none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? '0' : '-100%')};
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    background-color: #7510F7;
  }
`
export const Item = styled.li`
  height: 100%;
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

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

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
  
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    align-items: center;
    cursor: pointer;

    svg {
      fill: white;
      margin-right: 8px;
    }
  }
`