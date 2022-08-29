import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Styles/ReturnHome.css'

const ReturnHome = ({ setOpenModal }) => {
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

            <h3 id='title-home'>Devoluciones</h3>

            <div id="return-home">
                <div id="return-home__container">
                    <div id='container-btn-radio'>
                        <div>
                            <input type="radio" id="test2" name="radio-group" checked />
                            <label for="test2">Devolver tu producto en Domicilio</label>
                            <span id='span-free__home'>Gratuito</span>
                            <div>
                                <p className='home-date' >Estimada hasta al jueves 10 Mar. - martes 15 mar.</p>
                                <p className='home-info'>+ info</p>
                            </div>
                        </div>
                    </div>

                    <p>Facturación</p>

                    <div id="div-inputs">
                        <input type="text" id='direccion' placeholder='España' />
                        <div className='div-flex'>
                            <input type="text" id='nombre' placeholder='Nombre' />
                            <input type="text" id='apellido' placeholder='Apellido' />
                        </div>
                        <input type="text" id='linea1' placeholder='Dirección (línea 1)' />
                        <input type="text" id='linea2' placeholder='Dirección (línea 2)' />
                        <div className='div-flex'>
                            <input type="text" id='codigo_postal' placeholder='Código Postal' />
                            <input type="text" id='ciudad' placeholder='Ciudad' />
                        </div>
                    </div>

                    <input type="checkbox" id="term-home" name="terms" />
                    <label htmlFor="term-home">Estoy de acuerdo con los <span id='terminos-home'>Términos y Condiciones</span></label>
                </div>

                <button id='bt-home'>Confirmar Devolución</button>

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

export default ReturnHome