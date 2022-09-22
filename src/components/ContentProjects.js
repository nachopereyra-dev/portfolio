import React from "react";
import Article from './Article'

let project1 = {
    name: 'Nachopereyra.dev',
    description: 'This was my first project developed entirely with React. It was a great personal challenge because at the beginning I did not have enough knowledge to achieve what I wanted. It was hours of experimentation, trials and errors that allowed me to obtain the final version that I had projected at the beginning. I hope you like it, in the links you can see the project and the development phases, from design and layout to code implementation.',
    className: ''
}

let project2 = {
    name: 'Fifa World Cup 2022 - Penca',
    description: 'description',
    className: ''
}

let project3 = {
    name: 'Movelo',
    description: 'description',
    className: ''
}

let project4 = {
    name: 'Coming soon :)',
    description: 'Project in process',
    className: 'in-process'
}

let projects = [project1, project2, project3, project4]

function ContentProjects({projectRef}) {

    return (
        <>
            <section className="projects" id="projects" ref={projectRef}>

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