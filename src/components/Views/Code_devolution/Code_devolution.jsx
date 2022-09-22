import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './code_devolution.css'

const ViewRefudSuccess = ({ setOpenModal }) => {
    const { push } = useHistory()
    const [open, setOpen] = useState(false);

    const closeModal = () => {
        window.localStorage.removeItem('InfoLogin', true)
        push('/')
        setOpenModal(false)
    }

    return (
        <>
            <div className='container_icons'>
                <div className='icon__arrow' onClick={() => { return window.history.back() }}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
                <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>
            </div>

            <h3 id='title-view'>Devoluciones</h3>

            <div id="view-container">
                <div id="article-view">
                    <p id='title-message'>Tu solicitud de devolución se ha efectuado con éxito.</p>
                    <span id='paragraph-message'>Hemos enviado a tu correo electrónico el código de devolución.
                        Muestra el código para devolver tu producto.</span>
                    <p id='small-message'>Código devolución:</p>
                    <input type="text" name="" id="code-devolution" value="A28-U78-XXX-I98" disabled />
                    <button id='view-btn' onClick={() => { push('/questionnaire') }}>Terminar devolución</button>
                </div>
            </div>

            {open ?
                (<>
                    <div className="background">
                        <div className="popup">
                            <div className="content">
                                ¿Seguro que deseas salir?, Todo el estado actual se perderá.
                            </div>
                            <div className='container-btn'>
                                <button className='btn-cancel' onClick={() => { setOpen(false) }}>Cancelar</button>
                                <button className='btn-accept' onClick={closeModal}>Aceptar</button>
                            </div>
                        </div>
                    </div>
                </>) : false}
        </>
    )
}

export default ViewRefudSuccess