import React, { useState, useContext } from 'react'
import { WebContext } from '../../Context/Context'
import { useHistory } from 'react-router-dom'
import './credit_card.css'
import Visa from '../../../assets/visa-credit-card.png'
import Master from '../../../assets/mastercard.png'
import Maestro from '../../../assets/maestro.png'
import American from '../../../assets/american-express.png'
import Loading from '../../../common/Loading'


const ReturnCard = ({ setOpenModal }) => {
    const { dates, loading, setLoading } = useContext(WebContext)
    const { push } = useHistory()
    const [open, setOpen] = useState(false);
    const [datesCard, setDatesCard] = useState({});
    const [errors, setErrors] = useState({})
    const { date, num, type, name, address, value } = errors ?? false;
    const [actualState, changeCheckState] = useState(false);
    const errorDate = (date ?? [])[0];
    const errorNum = (num ?? [])[0];
    const errorName = (name ?? [])[0];
    const errorAddrees = (address ?? [])[0];
    const errorValue = (value ?? [])[0];
    const errorTypt = (type ?? [])[0];
    const closeModal = () => {
        window.localStorage.removeItem('InfoLogin', true)
        push('/')
        setOpenModal(false)
    }

    const handleChexbox = (e) => {
        changeCheckState(e.target.checked);
    }

    const getDates = ({ target }) => {
        const { name, value } = target;
        setDatesCard({ ...datesCard, [name]: value })
    }

    const validateCard = () => {
        setLoading(true);
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        };

        let body = {
            terms: actualState,
            name: datesCard.name,
            value: datesCard.value,
            address: datesCard.address,
            date: datesCard.date,
            num: datesCard.num,
            type: datesCard.type
        }
        fetch("https://www.turnover.gotopdev.com/api/v1/validatedck", { headers, method: "POST", body: JSON.stringify(body) })
            .then(res => res.json())
            .then((errors) => {
                setLoading(false)
                setErrors(errors.errors)
                setTimeout(() => {
                    setErrors({})
                }, 6000);
                if (errors.status === 'Success') {
                    push('/view-repayment')
                }
            })
    }

    return (
        <>
            {!!loading ? (<Loading />) : false}
            <div className="container-general">

                <div className='container_icons'>
                    <div className='icon__arrow' onClick={() => { return window.history.back() }}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
                    <h3 className='title__icons'>Devoluciones</h3>
                    <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>
                </div>

                <div className="flex-general">
                    <div id="return-card__container">
                        <div id='card-btn-radio'>
                            <div>
                                <div className="container-radio">
                                    <label htmlFor="test2" className='label-radio' >
                                        <input type="radio" id="test2" name="radio-group" checked />
                                        <span>Reembolso a una tarjeta</span>
                                    </label>
                                    <span id='span-free__card'>{dates.price}???</span>
                                </div>
                                <div>
                                    <p className='card-date' >Estimada hasta al jueves 10 Mar. - martes 15 mar.</p>
                                    <p className='card-info'>+ info</p>
                                </div>
                            </div>
                        </div>

                        <p>Informaci??n de la tarjeta</p>

                        <div id="div-inputs__card">
                            <div>
                                <input type="text" maxLength={16} id='card_number' placeholder='N??mero de tarjeta bancaria' name='value' onChange={getDates} pattern="[0-9]+" />
                                {errorValue ? (<><div className='message-error'>{errorValue}</div></>) : false}
                            </div>
                            <div>
                                <select id='select-card' onChange={getDates} name='type'>
                                    <option selected disabled>Selecciona tu tarjeta</option>
                                    <option value="1">Visa</option>
                                    <option value="1">Master Card</option>
                                    <option value="1">Platino</option>
                                </select>
                                {errorTypt ? (<><div className='message-error'>{errorTypt}</div></>) : false}
                            </div>
                            <div>
                                <input type="text" maxLength={20} id='titular' placeholder='Titular de la tarjeta' name='name' onChange={getDates} />
                                {errorName ? (<><div className='message-error'>{errorName}</div></>) : false}
                            </div>
                            <div>
                                <input type="text" maxLength={25} id='address_card' placeholder='Direcci??n' name='address' onChange={getDates} />
                                {errorAddrees ? (<><div className='message-error'>{errorAddrees}</div></>) : false}
                            </div>
                            <div className='div-flex'>
                                <div>
                                    <input type='text' maxLength={5} id='expirado' placeholder='Fecha de vencimiento (mm/aa)' name='date' onChange={getDates} />
                                    {errorDate ? (<><div className='message-error'>{errorDate}</div></>) : false}
                                </div>
                                <div>
                                    <input type="text" maxLength={4} id='cvv' placeholder='CVV' name='num' onChange={getDates} pattern="[0-9]+" />
                                    {errorNum ? (<><div className='message-error'>{errorNum}</div></>) : false}
                                </div>
                            </div>
                        </div>

                        <input type="checkbox" id="term-card" name="terms" onChange={handleChexbox} />
                        <label htmlFor="term-card"> He le??do, entiendo y acepto  <span id='terminos-card'> Condiciones de reembolso</span> de TurnOver.</label>
                    </div>

                    <div id='brands'>
                        <img src={Visa} alt="visa" width={55} />
                        <img src={Master} alt="mastercard" width={55} />
                        <img src={Maestro} alt="maestro" width={55} />
                        <img src={American} alt="american express" width={55} />
                    </div>

                    {datesCard.value === undefined || datesCard.value.length === 0 || datesCard.name === undefined || datesCard.name.length === 0 || datesCard.address === undefined || datesCard.address.length === 0 || datesCard.date === undefined || datesCard.date.length === 0 || datesCard.num === undefined || datesCard.num.length === 0 || actualState === false ?
                        (<>
                            <button id='bt-card'>Confirmar reembolso</button>
                        </>) :
                        (<>
                            <button id='bt-card-active' onClick={validateCard}>Confirmar reembolso</button>
                        </>)}

                </div>
            </div>

            {open ?
                (<>
                    <div className="background">
                        <div className="popup">
                            <div className="content">
                                ??Seguro que deseas salir?, Todo el estado actual se perder??.
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