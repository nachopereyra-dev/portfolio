import React from "react";
import ReactModal from 'react-modal'
import { useModal } from 'react-modal-hook'
import cerrarProjectDetail from '../assets/img/X-project.svg'

function Article(props) {

    const [showModal, hideModal] = useModal(() => (
        <ReactModal isOpen>
            <div className="superior">
            <p className="titulo">{props.name}</p>
            <img onClick={hideModal} src={cerrarProjectDetail} />
            </div>
            <div className="descripciones">
                <p className="descripcion">{props.mainDescription}</p>
                <p className="descripcion">{props.secondDescription}</p>
                <p className="descripcion">{props.thirdDescription}</p>
            </div>
            <div className="botones">
                    <a href='https://www.figma.com/file/pFeY9okei9IIa7t0LHdT0b/Proyecto-1-Figma?node-id=0%3A1' target='_blank'><i class="fa-brands fa-figma"></i>Figma</a>
                    <a href='https://github.com/nachopereyra-dev' target='_blank'><i class="fa-brands fa-github"></i>Github</a>
                    <a href='https://www.nachopereyra.dev' target='_blank'><i class="fa-brands fa-sistrix"></i>Sitio web</a>
                </div>
        </ReactModal>
    ))

    return (
        <>

                <article onClick={showModal} className={`article ${props.className}`}>
                    <a>
                        <p className="titulo">{props.name}</p>
                    </a>
                </article>

        </>
    )
}

export default Article