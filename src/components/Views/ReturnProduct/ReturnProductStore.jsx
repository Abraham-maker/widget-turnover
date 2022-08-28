import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Styles/ReturnProductStore.css'

const ReturnProductStore = ({ setOpenModal }) => {
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

            <h3 id='title-store'>Devoluciones</h3>

            <div id="container-return__store">

                <div id="return-store">
                    <div>
                        <input type="radio" id="test1" name="radio-group" checked />
                        <label for="test1">Devolver tu producto en Tienda</label>
                        <span id='span-store'>Gratuito</span>
                        <div>
                            <p className='store-date'>Estimada hasta al marte 08 Mar. - martes 15 mar.</p>
                            <p className='store-info'>+ info</p>
                        </div>
                        <p id='paragraph-store'>Eligir Tienda</p>
                    </div>
                </div>

                <div id="container-stores">
                    <div id='stores'>
                        <div id='stores-div'>
                            <input type="radio" id="store1" name="stores" />
                            <label for="store1">Mango Diagonal Mar </label>
                            <div>
                                <p className='store-date'>C.C. Diagonal Mar, Avinguda Diagonal, 3, 08019 Barcelona</p>
                            </div>
                        </div>

                    </div>
                </div>

                <button id='btn-stores'>Confirmar Devolución</button>

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

export default ReturnProductStore