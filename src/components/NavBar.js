import React from "react";
import { NavbarWrapper } from '../styles/NavBarStyles'
import { Link } from 'react-router-dom'

function Navbar({open, handleClick, homeRefClick, projectRefClick, aboutmeRefClick, contactRefClick}) {
  
    const onClick = (refClick) => {
      refClick()
      handleClick()
    }

    // OTRO CAMINO

    // const onClick = (sectionId) => {
    //   document.getElementById(sectionId).scrollIntoView()
    //   handleClick()
    // }
    
    {/* <Link to={'/'} onClick={() => onClick('projects')}>Emi</Link> */}

    //

    return (

      <NavbarWrapper open={open}>
        {/* <a href="" onClick={handleClick}>HOME</a>
        <a href="" onClick={handleBackClick}>PROJECTS</a>  
        <a href="" onClick={handleClick}>ABOUT ME</a>  
        <a href="" onClick={handleClick}>CONTACT</a>   */}
        <Link to={'/'} onMouseDown={homeRefClick} onMouseUp={handleClick}>HOME</Link>
        <Link to={'/'} onClick={() => onClick(projectRefClick)}>Emi</Link>
        <Link to={'/'} onMouseDown={projectRefClick} onMouseUp={handleClick}>PROJECTS</Link>
        <Link to={'/'} onMouseDown={aboutmeRefClick} onMouseUp={handleClick}>ABOUT ME</Link>
        <Link to={'/'} onMouseDown={contactRefClick} onMouseUp={handleClick}>CONTACT</Link>
      </NavbarWrapper>
    );
  }
  
  export default Navbar;