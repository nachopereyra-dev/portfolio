import React from "react";

function ContentAboutMe({aboutmeRef}) {
    return (
        <>
            <section className="about-me" ref={aboutmeRef}>
    
                    <h2 className="titulo">ABOUT ME</h2>

                    <div className="parrafos">
                        <p>Hi! My name is <b>Juan Ignacio Pereyra,</b> I'm <b>uruguayan</b> and I'm 27 years old.</p>
                        <p>I believe in <b>technology as a tool to make a better world</b> and as a way to <b>improve the quality of our lives.</b></p>
                        <p>If I had <b>to describe myself</b> in a few words, I would choose <b>attitude, curiosity</b> and <b>human sense.</b></p>

                        <p>In addition, I am an amateur athlete, I like to travel, meet people and places.</p>

                        <p>In 2021, <a href="https://study.buenosaires.gob.ar/es/articulos/view/Noticias/78" target='_blank'><b>I was chosen as an outstanding student in Latin America</b></a> through the <b><a href="https://study.buenosaires.gob.ar/es" target='_blank'>Study BA program</a></b> and benefited from a 100% scholarship <b>to study a <a href="https://www.palermo.edu/ingenieria/maestria-en-tecnologia-de-la-informacion/" target='_blank'>master's degree in information technology</a></b> at the <b><a href="https://www.palermo.edu/" target='_blank'>University of Palermo</a></b> in Argentina, which I am <b>currently studying.</b></p>
                        <p>During 2020-21 I studied and obtained a <a href="https://www.iebschool.com/programas/postgrado-blockchain/#:~:text=qui%C3%A9n%20va%20dirigido%3F-,El%20Postgrado%20en%20Blockchain%20proporciona%20formaci%C3%B3n%20espec%C3%ADficamente%20orientada%20a%20los,habilidades%20digitales%20en%20sus%20departamentos." target='_blank'><b>postgraduate degree in Blockchain Technologies</b></a> at <b><a href="https://www.iebschool.com/" target='_blank'>IEBS Madrid.</a></b></p>
                        <p>And lastly, <b>in 2020 I obtained my <a href="https://carreras.ucu.edu.uy/index.php/direccion-de-empresas?gclid=CjwKCAjwyaWZBhBGEiwACslQo5WwU6G8vGmaTr3iMkmDAD9t7UHTNCLRMSOAmN9Ap9Dcn9AYEN5rfxoCVGYQAvD_BwE" target='_blank'>bachelor's degree in business management</a></b> from the <b><a href="https://ucu.edu.uy/es" target='_blank'>Catholic University of Uruguay.</a></b></p>
                    </div>

            </section>
        </>
    )
}

export default ContentAboutMe