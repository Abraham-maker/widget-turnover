import React, { useState } from 'react'
import './ReasonRefud.css'
import { useHistory } from 'react-router-dom'


const ReasonRefud = ({ setOpenModal }) => {
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

            <h3 id='title-reason'>Devoluciones</h3>

            <div id="container-reason">
                <div id="article-reason">
                    <span id='reason-refud'>Indica las razones de tu devolución</span>

                    <div id='container-radios'>
                        <div>
                            <input type="radio" id="test1" name="radio-group" />
                            <label for="test1">Cambio de Opinión</label>
                        </div>
                        <div>
                            <input type="radio" id="test2" name="radio-group" />
                            <label for="test2">No es mi estilo</label>
                        </div>
                        <div>
                            <input type="radio" id="test3" name="radio-group" />
                            <label for="test3">Esta defectuoso</label>
                        </div>
                        <div>
                            <input type="radio" id="test4" name="radio-group" />
                            <label for="test4">El patrón no me encaja</label>
                        </div>
                        <div>
                            <input type="radio" id="test5" name="radio-group" />
                            <label for="test5">No ha correspondido a mis espectativas</label>
                        </div>
                    </div>
                    <div id='container-input'>
                        <label htmlFor="comentary">Comentários (opcional)</label>
                        <input type="text" id='comentary' placeholder='Escribe aqui' />
                    </div>

                    <div id='container-btn-reason'>
                        <button id='btn-reason'><span>Confirmar devolución</span></button>
                    </div>
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

export default ReasonRefud