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
            <p className="descripcion">{props.description}</p>
            <div className="botones">
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