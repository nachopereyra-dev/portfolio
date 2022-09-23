import React from "react";
import { Link } from 'react-router-dom'
import foto from '../assets/img/foto.svg'

function ContentTop() {

    const onClick = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth'})
      }

    return (
        <>
            <div className="content" id="home" >
                <div className="content-top">
                    <div className="foto">
                        <img src={foto} alt='foto-personal' />
                    </div>

                <div className="sub-content-top">
                    <div className="text">
                        <h1>Hi, I'm Nacho</h1>
                        <h2>Jr. <span className="green">Frontend</span> Developer</h2>
                        <h2 className="present">My career as a web developer is just beginning, I would love to meet you :)</h2>
                    </div>

                    <div className="buttons">

                        <div className="portfolio-button">
                            <Link to={'/'} onClick={() => onClick('projects')}>Projects</Link>
                        </div>

                        <div className="about-me-button">
                            <Link to={'/'} onClick={() => onClick('about-me')}>About me</Link>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentTop