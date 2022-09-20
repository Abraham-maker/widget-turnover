import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { WebContext } from '../../../config/Context/Context'
import './Styles/RePayment.css'
import Loading from '../../../common/Loading'

const RePayment = ({ setOpenModal }) => {
    const { loading, setLoading, dates, color_storage, total_storage, radios_storage, check_storage } = useContext(WebContext)
    const [checkbox, setCheckbox] = useState(false)
    const { push } = useHistory()
    const [open, setOpen] = useState(false);
    let infoProduct = JSON.parse(window.localStorage.getItem('info_product', true))


    const closeModal = () => {
        window.localStorage.removeItem('InfoLogin', true)
        push('/')
        setOpenModal(false)
    }

    const radiosChangeRefud = ({ target }) => {
        setCheckbox(target.value);
    }

    const onChangePages = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            if (checkbox === 'Reembolso a una tarjeta') {
                return push('/return-card')
            } else if (checkbox === 'Tarjeta TurnOver') {
                return push('/refud-card-turnover')
            }

        }, 1000);
        window.localStorage.setItem("producto_reembolso", checkbox)
    }

    return (
        <>

            <div className='container_icons'>
                <div className='icon__arrow' onClick={() => { return window.history.back() }}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
                <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>
            </div>

            <h3 id='title-rePayemt'>Devoluciones</h3>

            <div id="container-rePayment">
                <div>
                    <p>Tu reembolso se efectuará en el instante.</p>
                    <div id="article-re">
                        <div id="re-img">
                            <img src={dates.images[0].http_path} alt="" />
                        </div>
                        <div>
                            <div id='re-flex'>
                                <span>{dates.name} {dates.u_model}</span>
                                <div>
                                    <span>{dates.price}€</span>
                                </div>
                            </div>
                            <p id='ref-re'>Ref. {dates.id}</p>
                            {Object.entries(color_storage).length !== 0 ?
                                (<>
                                    <p id='size-any'>Talla : {radios_storage.talla.talla}</p>
                                    <div id='container-colors__any'>
                                        <span>Color :</span>
                                        {color_storage.color.color === '4' ? (<><span>Red</span></>) :
                                            color_storage.color.color === '3' ? (<><span>Blue</span></>) :
                                                color_storage.color.color === '1' ? (<><span>Green</span></>) :
                                                    color_storage.color.color === '2' ? (<><span>Yellow</span></>) : false
                                        }
                                    </div>
                                </>) : false}
                        </div>
                    </div>
                    <div id="re-options">
                        <span id='span-re'>Selecciona un método de devolución</span>

                        <div id='container-radios__re'>
                            <div>
                                <div className='container-radio'>
                                    <label htmlFor="test1" className='label-radio' >
                                        <input type="radio" id="test1" name="radio-group" value='Reembolso a una tarjeta' onChange={radiosChangeRefud} />
                                        <span>Reembolso a una tarjeta</span>
                                    </label>
                                    <span id='span-free__re'>{dates.price}€</span>
                                </div>
                                <div>
                                    <p className='any-date'>Estimada hasta el martes 08 sep. - martes 15 sep.</p>
                                    <p className='any-info'>+ info</p>
                                </div>
                            </div>
                            <div>
                                <div className='container-radio'>
                                    <label htmlFor="test2" className='label-radio' >
                                        <input type="radio" id="test2" name="radio-group" value='Tarjeta TurnOver' onChange={radiosChangeRefud} />
                                        <span>Tarjeta TurnOver</span>
                                    </label>
                                    <span id='span-free2__re'>{dates.price}€</span>
                                </div>
                                <div>
                                    <p className='any-date' >Estimada hasta el jueves 10 Mar. - martes 15 mar.</p>
                                    <p className='any-info'>+ info</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    {checkbox === false ?
                        (<>
                            <div id='btn-reNext'>
                                <button id='re-btnNext'>Continuar reembolso</button>
                            </div>
                        </>) :
                        (<>
                            <div id='btn-reNext'>
                                <button id='re-btnNext-active' onClick={onChangePages}>Continuar reembolso</button>
                                {!!loading ? (<Loading />) : false}
                            </div>
                        </>)}
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

export default RePayment