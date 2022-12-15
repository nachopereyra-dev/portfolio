import React from "react";
import ContentTop from './ContentTop'
import ContentProjects from "./ContentProjects";
import ContentAboutMe from './ContentAboutMe'
import ContentContact from "./ContentContact";
import Footer from './Footer'

function Contenido() {

    return (
        <>
            <main>
                
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