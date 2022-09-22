import React from "react";
import styled from "styled-components";
import burgerMenu from '../assets/img/burger-menu.svg'
import cerrarBurgerMenu from '../assets/img/X.svg'

const MenuButtonWrapper = styled.button`
    background-color: transparent;
    border: none;

  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;

function MenuButton({ open, handleClick }) {
  return !open ? (
    <MenuButtonWrapper onClick={handleClick}>
        <img src={burgerMenu} />
    </MenuButtonWrapper>
  ) : (
    <MenuButtonWrapper onClick={handleClick}>
        <img src={cerrarBurgerMenu} />
    </MenuButtonWrapper>
  );
}

export default MenuButton;
