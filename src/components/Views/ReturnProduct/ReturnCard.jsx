import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Styles/ReturnCard.css'

const ReturnCard = ({ setOpenModal }) => {
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

            <h3 id='title-card'>Devoluciones</h3>
            <div id="return-card">
                <div id="return-card__container">
                    <div id='card-btn-radio'>
                        <div>
                            <input type="radio" id="test2" name="radio-group" checked />
                            <label for="test2">Reembolso a una tarjeta</label>
                            <span id='span-free__card'>59,90€</span>
                            <div>
                                <p className='card-date' >Estimada hasta al jueves 10 Mar. - martes 15 mar.</p>
                                <p className='card-info'>+ info</p>
                            </div>
                        </div>
                    </div>

                    <p>Información de la tarjeta</p>

                    <div id="div-inputs__card">
                        <input type="text" id='card_number' placeholder='Número de tarjeta bancaria' />
                        <select id='select-card'>
                            <option selected disabled>Selecciona tu tarjeta</option>
                            <option value="1">Visa</option>
                            <option value="2">Master Card</option>
                            <option value="3">Platino</option>
                        </select>
                        <input type="text" id='titular' placeholder='Titular de la tarjeta' />
                        <input type="text" id='address_card' placeholder='Dirección' />
                        <div className='div-flex'>
                            <input type="text" id='expirado' placeholder='Fecha de vencimiento' />
                            <input type="text" id='cvv' placeholder='CVV' />
                        </div>
                    </div>

                    <input type="checkbox" id="term-card" name="terms" />
                    <label htmlFor="term-card"> He leído, Entiendo y acepto  <span id='terminos-card'> Condiciones de reembolso</span> de TurnOver.</label>
                </div>

                <button id='bt-card'>Confirmar reembolso</button>

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

export default ReturnCard