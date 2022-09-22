import React from "react";

function ContentContact({contactRef}) {
    return (
        <>
            <section className="contact" ref={contactRef}>
                <h2 className="titulo">CONTACT</h2>
                <div className="sub-contact">
                    <p><span>Send me</span></p>
                    <p>a message</p>

                    <div className="rectangulos">
                        <a className="rectangulo">
                            <a href="mailto:nachopereyra.dev@gmail.com"><i class="fa-solid fa-inbox"></i>Gmail</a>
                        </a>

                        <a className="rectangulo">
                            <a href="https://www.linkedin.com/in/juanignaciopereyra/" target='_blank'><i class="fa-brands fa-linkedin"></i>LinkedIn</a>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContentContact