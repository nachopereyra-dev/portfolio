import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom'
import Header from "./Header";
import ContentTop from './ContentTop'
import ContentProjects from "./ContentProjects";
import ContentAboutMe from './ContentAboutMe'
import ContentContact from "./ContentContact";
import Footer from './Footer'
import NotFound from "./NotFound";

function Contenido() {

    return (
        <>
            <main>

                {/* <Routes>
                    <Route path="/projects" element={<ContentProjects />} />
                    <Route path="/about-me" element={<ContentAboutMe />} />
                    <Route path="/contact" element={<ContentContact />} />   
                    <Route path='*' element={<NotFound />} />                        
                </Routes> */}
                
                <ContentTop />
                <ContentProjects />
                <ContentAboutMe />
                <ContentContact />
                <Footer />

            </main>
        </>
    )
}

export default Contenido