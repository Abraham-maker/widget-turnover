import React, { useState } from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { WebContext } from '../../../config/Context/Context'
import './Styles/ReturnCard.css'

const ReturnCard = ({ setOpenModal }) => {
    const { dates, loading, setLoading } = useContext(WebContext)
    const { push } = useHistory()
    const [open, setOpen] = useState(false);
    const [datesCard, setDatesCard] = useState({});

    const closeModal = () => {
        window.localStorage.removeItem('InfoLogin', true)
        push('/')
        setOpenModal(false)
    }

    const getDates = ({ target }) => {
        const { name, value } = target;
        setDatesCard({ ...datesCard, [name]: value })
    }

    const getCard = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            push('/view-repayment')
        }, 1000);
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
                            <span id='span-free__card'>{dates.price}€</span>
                            <div>
                                <p className='card-date' >Estimada hasta al jueves 10 Mar. - martes 15 mar.</p>
                                <p className='card-info'>+ info</p>
                            </div>
                        </div>
                    </div>

                    <p>Información de la tarjeta</p>

                    <div id="div-inputs__card">
                        <input type="text" maxLength={25} id='card_number' placeholder='Número de tarjeta bancaria' name='creditCard' onChange={getDates} />
                        <select id='select-card' onChange={getDates} name='tarjeta'>
                            <option selected disabled>Selecciona tu tarjeta</option>
                            <option value="Visa">Visa</option>
                            <option value="Master Card">Master Card</option>
                            <option value="Platino">Platino</option>
                        </select>
                        <input type="text" maxLength={10} id='titular' placeholder='Titular de la tarjeta' name='type_creditCard' onChange={getDates} />
                        <input type="text" maxLength={25} id='address_card' placeholder='Dirección' name='direccion_card' onChange={getDates} />
                        <div className='div-flex'>
                            <input type='date' id='expirado' placeholder='Fecha de vencimiento' name='fecha_expirada' onChange={getDates} />
                            <input type="text" maxLength={4} id='cvv' placeholder='CVV' name='cvv' onChange={getDates} />
                        </div>
                    </div>

                    <input type="checkbox" id="term-card" name="terms" onChange={getDates} />
                    <label htmlFor="term-card"> He leído, Entiendo y acepto  <span id='terminos-card'> Condiciones de reembolso</span> de TurnOver.</label>
                </div>

                {datesCard.creditCard === undefined || datesCard.creditCard.length === 0 || datesCard.tarjeta === undefined || datesCard.tarjeta.length === 0 || datesCard.type_creditCard === undefined || datesCard.type_creditCard.length === 0 || datesCard.fecha_expirada === undefined || datesCard.fecha_expirada.length === 0 || datesCard.cvv === undefined || datesCard.cvv.length === 0 ?
                    (<>
                        <button id='bt-card'>Confirmar reembolso</button>
                    </>) :
                    (<>
                        {!!loading ? (<><div className='spinner'></div></>) : false}
                        <button id='bt-card-active' onClick={getCard}>Confirmar reembolso</button>
                    </>)}

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