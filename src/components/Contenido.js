import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom'
import Header from "./Header";
import ContentTop from './ContentTop'
import ContentProjects from "./ContentProjects";
import ContentAboutMe from './ContentAboutMe'
import ContentContact from "./ContentContact";
import Footer from './Footer'
import NotFound from "./NotFound";

function Contenido({ homeRef, projectRefClick, aboutmeRefClick, projectRef, aboutmeRef, contactRef}) {

    return (
        <>
            <main>

                {/* <Routes>
                    <Route path="/projects" element={<ContentProjects />} />
                    <Route path="/about-me" element={<ContentAboutMe />} />
                    <Route path="/contact" element={<ContentContact />} />   
                    <Route path='*' element={<NotFound />} />                        
                </Routes> */}
                
                <ContentTop homeRef={homeRef} projectRefClick={projectRefClick} aboutmeRefClick={aboutmeRefClick} />
                <ContentProjects projectRef={projectRef} />
                <ContentAboutMe aboutmeRef={aboutmeRef} />
                <ContentContact contactRef={contactRef} />
                <Footer />

            </main>
        </>
    )
}

export default Contenido