import React, { useState, useContext, useEffect } from 'react'
import './Index.css';
import { WebContext } from '../../../Context/Context'
import { useHistory } from 'react-router-dom'
import Loading from '../../../../common/Loading';


const AnyReason = ({ setOpenModal }) => {
    const { loading, setLoading, dates, color_storage, total_storage, radios_storage, check_storage } = useContext(WebContext)
    const { push } = useHistory()
    const [open, setOpen] = useState(false);
    const [radios, setRadios] = useState(false)
    const [returnPlace, setReturnPlace] = useState({})

    const closeModal = () => {
        push('/')
        setOpenModal(false)
    }

    const changeRadios = ({ target }) => {
        setRadios(target.value);
    }

    const onChangePage = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            if (radios === 'Devolver tu producto en Tienda') {
                return push('/return-product')
            } else if (radios === 'Devolver tu producto en Domicilio') {
                return push('/address-devolution')
            }

        }, 1000);
        window.localStorage.setItem("devolver_producto", radios)
    }

    useEffect(() => {
        const placeReturn = () => {
            const url = 'https://www.turnover.gotopdev.com/api/v1/place-of-return?key=2c4c5a3b-5289-4b26-9cea-43b955bb1881'
            fetch(url).then(res => res.json())
                .then(({ data }) => {
                    setReturnPlace(data);
                })
        }
        placeReturn();
    }, [])


    return (
        <>
            {!!loading ? (<Loading />) : false}
            <div className='container_icons'>
                <div className='icon__arrow' onClick={() => { return window.history.back() }}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
                <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>
            </div>

            {/* <h3 id='title-any'>Devoluciones</h3> */}

            <div id="container-any__reason">
                <div id="any-container">
                    <div id="article-any">
                        <div id="any-img">
                            <img src={dates.images[0].http_path} alt="" />
                        </div>
                        <div id='container-about_'>
                            <div id='any-flex'>
                                <span>{dates.name} {dates.u_model}</span>
                                <div>
                                    <span>{dates.price}€</span>
                                </div>
                            </div>
                            <span id='ref-any'>Ref. : {dates.id}</span>
                            <span>
                                {!total_storage ? (<span id='more-prices'>+0€</span>) : (<span id='more-prices'>+{total_storage}€</span>)}
                            </span>
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
                                    <div id='container-check__flex'>
                                        <span>Checkbox :</span>
                                        {check_storage.checkbox.map((storage) => {
                                            return (
                                                <>
                                                    <span>{storage},</span>
                                                </>
                                            )
                                        })}
                                    </div>
                                </>) : false}

                        </div>
                    </div>
                    <div id="any-options">
                        <span id='span-any'>Selecciona un método de devolución</span>

                        <div id='container-radios__any'>

                            {
                                returnPlace.has_return_store !== 0 ?
                                    (<>
                                        <div>
                                            <div className='container-radio'>
                                                <label htmlFor="test1" className='label-radio'>
                                                    <input type="radio" id="test1" name="radio-group" value='Devolver tu producto en Tienda' onChange={changeRadios} />
                                                    <span>Devolver tu producto en Tienda</span>
                                                </label>
                                                <span className='span-free'>Gratuito</span>
                                            </div>
                                            <div>
                                                <p className='any-date' >Estimada hasta el jueves 10 sep. - martes 15 sep.</p>
                                                <p className='any-info'>+ info</p>
                                            </div>
                                        </div>
                                    </>) : false
                            }

                            {
                                returnPlace.has_return_home !== 0 ?
                                    (<>
                                        <div>
                                            <div className='container-radio'>
                                                <label htmlFor="test2" className='label-radio'>
                                                    <input type="radio" id="test2" name="radio-group" value='Devolver tu producto en Domicilio' onChange={changeRadios} />
                                                    <span>Devolver tu producto en Domicilio</span>
                                                </label>
                                                <span className='span-free'>Gratuito</span>
                                            </div>
                                            <div>
                                                <p className='any-date' >Estimada hasta el jueves 10 sep. - martes 15 sep.</p>
                                                <p className='any-info'>+ info</p>
                                            </div>
                                        </div>
                                    </>) : false
                            }

                            {
                                returnPlace.has_return_mail !== 0 ?
                                    (<>
                                        <div>
                                            <div className='container-radio'>
                                                <label htmlFor="test3" className='label-radio'>
                                                    <input type="radio" id="test3" name="radio-group" value='Enviar a Tienda/Almacén' onChange={changeRadios} />
                                                    <span>Enviar a Tienda/Almacén</span>
                                                </label>
                                                <span className='span-free'>Gratuito</span>
                                            </div>
                                            <div>
                                                <p className='any-date' >Estimada hasta el jueves 10 sep. - martes 15 sep.</p>
                                                <p className='any-info'>+ info</p>
                                            </div>
                                        </div>
                                    </>) :
                                    false
                            }

                        </div>
                    </div>

                    {radios === false ?
                        (<>
                            <div id='btn-anyNext'>
                                <button id='any-btnNext'>Continuar</button>
                            </div>
                        </>) :
                        (<>
                            <div id='btn-anyNext'>
                                <button id='any-btnNext-active' onClick={onChangePage}>Continuar</button>
                            </div>
                        </>)}
                </div>
            </div>

            {
                open ?
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
                    </>) : false
            }
        </>
    )
}

export default AnyReason