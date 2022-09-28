import React from "react";
import Article from './Article'

let project1 = {
    name: 'Nachopereyra.dev',
    mainDescription: 'This was my first project developed entirely with React.',
    secondDescription: ' It was a great personal challenge because at the beginning I did not have enough knowledge to achieve what I wanted. It was hours of experimentation, trials and errors that allowed me to obtain the final version that I had projected at the beginning.',
    thirdDescription: 'I hope you like it, in the links you can see the project and the development phases, from design and layout to code implementation.',
    figma: {
        logo: 'fa-brands fa-figma',
        name: 'Figma',
        link: 'https://www.figma.com/file/pFeY9okei9IIa7t0LHdT0b/Proyecto-1-Figma?node-id=0%3A1'
    },
    github: {
        logo: 'fa-brands fa-github',
        name: 'Github',
        link: 'https://github.com/nachopereyra-dev'
    },
    sitioWeb: {
        logo: 'fa-brands fa-sistrix',
        name: 'Sitio Web',
        link: 'https://www.nachopereyra.dev',
    className: ''
    }
}

let project2 = {
    name: 'Fifa World Cup 2022 - Penca',
    mainDescription: 'Project in process',
    secondDescription: '',
    thirdDescription: '',
    figma: {
        logo: '',
        name: '',
        link: ''
    },
    github: {
        logo: '',
        name: '',
        link: ''
    },
    sitioWeb: {
        logo: '',
        name: '',
        link: ''
    },
    className: ''
}

let project3 = {
    name: 'Movelo',
    mainDescription: 'Project in process',
    secondDescription: '',
    thirdDescription: '',
    figma: {
        logo: '',
        name: '',
        link: ''
    },
    github: {
        logo: '',
        name: '',
        link: ''
    },
    sitioWeb: {
        logo: '',
        name: '',
        link: ''
    },
    className: ''
}

let project4 = {
    name: 'Coming soon :)',
    mainDescription: 'Project in process',
    secondDescription: '',
    thirdDescription: '',
    figma: {
        logo: '',
        name: '',
        link: ''
    },
    github: {
        logo: '',
        name: '',
        link: ''
    },
    sitioWeb: {
        logo: '',
        name: '',
        link: ''
    },
    className: ''
}

let projects = [project1, project2, project3, project4]

function ContentProjects() {

    return (
        <>
            <section className="projects" id="projects" >

                <h2 className="titulo">PROJECTS</h2>

                <div className="articles">

                    {
                        projects.map((article,i) => {
                            return <Article {...article} key={article+i} />
                        })
                    }

                </div>

            </section>
        </>
    )
}

export default ContentProjects