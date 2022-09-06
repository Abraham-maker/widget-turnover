import React, { useState } from 'react'
import './Styles/AnyReason.css';
import { useContext } from 'react'
import { WebContext } from '../../../config/Context/Context'
import { useHistory } from 'react-router-dom'


const AnyReason = ({ setOpenModal }) => {
    const { loading, setLoading } = useContext(WebContext)
    const { push } = useHistory()
    const [open, setOpen] = useState(false);
    const [radios, setRadios] = useState(false)

    const closeModal = () => {
        window.localStorage.removeItem('InfoLogin', true)
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
                return push('/return-home')
            }

        }, 3000);
        window.localStorage.setItem("devolver_producto", radios)
    }

    return (
        <>
            <div className='container_icons'>
                <div className='icon__arrow' onClick={() => { return window.history.back() }}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
                <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>
            </div>

            <h3 id='title-any'>Devoluciones</h3>

            <div id="container-any__reason">
                <div id="any-container">
                    <div id="article-any">
                        <div id="any-img">
                            <img src="https://static.lefties.com/9/photos2/2022/I/0/1/p/5912/305/657/5912305657_1_1_3.jpg?t=1659362106638" alt="" />
                        </div>
                        <div>
                            <div id='any-flex'>
                                <span>Camisa Oversize X</span>
                                <span>59,90€</span>
                            </div>
                            <p id='ref-any'>Ref. 1287654</p>
                            <p id='size-any'>Size S</p>
                            <div id='container-colors__any'>
                                <span>Colours</span>
                                <div id='color1-any'></div>
                                <div id='color2-any'></div>
                                <div id='color3-any'></div>
                                <div id='color4-any'></div>
                            </div>
                        </div>
                    </div>
                    <div id="any-options">
                        <span id='span-any'>Selecciona un metodo de devolución</span>

                        <div id='container-radios__any'>
                            <div>
                                <input type="radio" id="test1" name="radio-group" value='Devolver tu producto en Tienda' onChange={changeRadios} />
                                <label for="test1">Devolver tu producto en Tienda</label>
                                <span id='span-free'>Gratuito</span>
                                <div>
                                    <p className='any-date'>Estimada hasta al marte 08 Mar. - martes 15 mar.</p>
                                    <p className='any-info'>+ info</p>
                                </div>
                            </div>
                            <div>
                                <input type="radio" id="test2" name="radio-group" value='Devolver tu producto en Domicilio' onChange={changeRadios} />
                                <label for="test2">Devolver tu producto en Domicilio</label>
                                <span id='span-free2'>Gratuito</span>
                                <div>
                                    <p className='any-date' >Estimada hasta al jueves 10 Mar. - martes 15 mar.</p>
                                    <p className='any-info'>+ info</p>
                                </div>
                            </div>
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
                                {!!loading ? <span className='spinner'></span> : false}
                                <button id='any-btnNext-active' onClick={onChangePage}>Continuar</button>
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

export default AnyReason