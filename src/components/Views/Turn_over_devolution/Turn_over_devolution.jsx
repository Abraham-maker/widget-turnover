import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './turn_over_devolution.css'

const RefudCardTurnOver = ({ setOpenModal }) => {
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

            <h3 id='title-card-refud'>Devoluciones</h3>

            <div id="card-div-success">
                <div id="article-card-success">
                    <p id='title-card-success'>Tu solicitud de reembolso se ha efectuado con éxito.</p>
                    <p id='paragraph-card-success'>Hemos enviado a tu correo electrónico los detalles de tu reembolso.</p>

                    <div id='card-refud-success'>
                        <img src="https://www.turnover.gotopdev.com/assets/images/LogoAzul.png" alt="turnover" width={100} />
                        <div id='card-texts-refud'>
                            <p id='title-fondos'>Saldo TurnOver:</p>
                            <p id='text-fondos'>59,90€</p>
                        </div>
                    </div>

                    <p id='title-about'>*Esta tarjeta es una tarjeta virtual</p>
                    <button id='btn-stores-success' onClick={() => { push('/questionnaire') }}>Ir a la tienda</button>
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

export default RefudCardTurnOver