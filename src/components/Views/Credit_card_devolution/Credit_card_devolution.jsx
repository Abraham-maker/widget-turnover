import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './credit_card_devolution.css'

const ViewRepayment = ({ setOpenModal }) => {
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

            <h3 id='title-success-refud'>Devoluciones</h3>

            <div id="refud-div-success">
                <div id="article-refud-success">
                    <p id='title-refud-success'>Tu solicitud de reembolso se ha efectuado con éxito.</p>
                    <p id='paragraph-refud-success'>Hemos enviado a tu correo electrónico los detalles de tu reembolso.</p>

                    <div id='card-success'>
                        <img src="https://www.turnover.gotopdev.com/assets/images/LogoAzul.png" alt="turnover" width={100} />
                        <div id='card-texts'>
                            <span id='title-card-saldo'>Saldo TurnOver:</span>
                            <span id='text-card'>59,90€</span>
                        </div>
                    </div>

                    <button id='btn-store-success' onClick={() => { push('/questionnaire') }}>Ir a la tienda</button>
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

export default ViewRepayment