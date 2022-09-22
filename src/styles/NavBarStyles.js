import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 120px 0 100px;
  background: #e5e5e5;
  position: fixed;
  top: 5vh;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 100%;
  transition: right 0.3s linear;

  a {
    font-size: 40px;
    font-weight: 700;
    padding: 1rem 0.8rem;
    color: black;
    text-decoration: none;
  }

  @media only screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    padding: 0;
    justify-content: flex-end;
    position: initial;
    height: auto;
    background: transparent;
    font-size: 14px;

    
    a {
      font-size:24px;
    }
    
  }


`;
