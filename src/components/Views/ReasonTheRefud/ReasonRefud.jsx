import React, { useState } from 'react'
import './ReasonRefud.css'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { WebContext } from '../../../config/Context/Context'

const ReasonRefud = ({ setOpenModal }) => {
    const { loading, setLoading } = useContext(WebContext)
    const { push } = useHistory()
    const [open, setOpen] = useState(false);
    const [radio, setRadio] = useState(false)
    const [comentary, setComentary] = useState('')
    let tipo_devolucion = JSON.parse(localStorage.getItem('tipo_devolucion', true))

    const closeModal = () => {
        window.localStorage.removeItem('InfoLogin', true)
        push('/')
        setOpenModal(false)
    }

    const changeRadio = ({ target }) => {
        setRadio(target.value);
    }

    const submitReason = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)

            if (tipo_devolucion === 'Quiero Reembolso') {

                return push('/re-payment')

            } else if (tipo_devolucion === 'Quiero un estilo/producto diferente' || tipo_devolucion === 'Quiero una talla/color diferente') {

                return push('/any-reason')

            }

        }, 3000);
        window.localStorage.setItem("razones_devolucion", radio)
        window.localStorage.setItem("comentario_razon", comentary)
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
                            <input type="radio" id="test1" name="radio-group" value='Cambio de Opinión' onChange={changeRadio} />
                            <label for="test1">Cambio de Opinión</label>
                        </div>
                        <div>
                            <input type="radio" id="test2" name="radio-group" value='No es mi estilo' onChange={changeRadio} />
                            <label for="test2">No es mi estilo</label>
                        </div>
                        <div>
                            <input type="radio" id="test3" name="radio-group" value='Esta defectuoso' onChange={changeRadio} />
                            <label for="test3">Esta defectuoso</label>
                        </div>
                        <div>
                            <input type="radio" id="test4" name="radio-group" value='El patrón no me encaja' onChange={changeRadio} />
                            <label for="test4">El patrón no me encaja</label>
                        </div>
                        <div>
                            <input type="radio" id="test5" name="radio-group" value='No ha correspondido a mis espectativas' onChange={changeRadio} />
                            <label for="test5">No ha correspondido a mis espectativas</label>
                        </div>
                    </div>
                    <div id='container-input'>
                        <label htmlFor="comentary">Comentários (opcional)</label>
                        <input type="text" id='comentary' placeholder='Escribe aqui' onChange={(event) => setComentary(event.target.value)} />
                    </div>

                    {radio === false ?
                        (<>
                            <div id='container-btn-reason'>
                                <button id='btn-reason'><span>Confirmar devolución</span></button>
                            </div>
                        </>) :
                        (<>
                            <div id='container-btn-reason' onClick={submitReason}>
                                {!!loading ? <span className='spinner'></span> : false}
                                <button id='btn-reason-active'><span>Confirmar devolución</span></button>
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

export default ReasonRefud