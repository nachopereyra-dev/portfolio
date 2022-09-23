import React, { useState, useRef } from "react";
import { HeaderWrapper } from '../styles/Header'
import Navbar from "./NavBar";
import MenuButton from './MenuButton'
import logo from '../assets/img/Nachopereyra.dev.svg'

function Header() {

    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen(!open)
    };

    const onClick = (sectionId) => {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth'})
    }
  
    return (
      <HeaderWrapper>

      <div className="sub-header">

        <div className="logo" onClick={() => onClick('home')}>
            <img src={logo} />
        </div>

        <Navbar open={open} handleClick={handleClick} />
      </div>
        <MenuButton open={open} handleClick={handleClick} />
      </HeaderWrapper>
    );
  }

// function Header() {
//     return (
//         <>
//            <header>

//                 <div className="logo">
//                     <img src={logo} />
//                 </div>

//                 <div className="menu">

//                     <div className="burger-menu">
//                         <img src={burgerMenu} />
//                     </div>

//                     <nav>
//                         <ul>
//                             <li><a>Home</a></li>
//                             <li><a>Projects</a></li>
//                             <li><a>About me</a></li>
//                             <li><a>Contact</a></li>
//                         </ul>
//                     </nav>

//                 </div>

//            </header>
//         </>
//     )
// }

export default Header