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
                    <a href={props.figma.link} target='_blank'><i class={props.figma.logo}></i>{props.figma.name}</a>
                    <a href={props.github.link} target='_blank'><i class={props.github.logo}></i>{props.github.name}</a>
                    <a href={props.sitioWeb.link} target='_blank'><i class={props.sitioWeb.logo}></i>{props.sitioWeb.name}</a>
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