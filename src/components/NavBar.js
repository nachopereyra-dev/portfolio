import React from "react";
import { NavbarWrapper } from '../styles/NavBarStyles'
import { Link } from 'react-router-dom'

function Navbar({open, handleClick}) {

    const onClick = (sectionId) => {
      document.getElementById(sectionId).scrollIntoView()
      handleClick()
    }

    return (

      <NavbarWrapper open={open}>
        <Link to={'/'} onClick={() => onClick('home')}>HOME</Link>
        <Link to={'/'} onClick={() => onClick('projects')}>PROJECTS</Link>
        <Link to={'/'} onClick={() => onClick('about-me')}>ABOUT ME</Link>
        <Link to={'/'} onClick={() => onClick('contact')}>CONTACT</Link>
      </NavbarWrapper>
    );
  }
  
  export default Navbar;