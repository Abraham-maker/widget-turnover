import React, { useState, useContext, useEffect } from 'react'
import './reason_devolution.css'
import { useHistory, useParams } from 'react-router-dom'
import { WebContext } from '../../Context/Context'
import Loading from '../../../common/Loading'


const ReasonRefud = ({ setOpenModal }) => {
    const { loading, setLoading } = useContext(WebContext)
    let params = useParams();
    let { product_id } = params;
    const { push } = useHistory()
    const [open, setOpen] = useState(false);
    const [radio, setRadio] = useState(false)
    const [reason, setReason] = useState({})
    let tipo_devolucion = JSON.parse(localStorage.getItem('tipo_devolucion', true))
    
    const closeModal = () => {
        window.localStorage.removeItem('InfoLogin', true)
        push('/')
        setOpenModal(false)
    }

    const changeRadio = ({ target }) => {
        const { name, value } = target;
        setRadio({ ...radio, [name]: value })
    }

    const submitReason = () => {
        setLoading(true);
        window.localStorage.setItem("razones_devolucion", JSON.stringify(radio))
        setTimeout(() => {
            setLoading(false)
            if (tipo_devolucion === 'Reembolso') {
                return push('/re-payment')
            } else if (tipo_devolucion === 'Cambio') {
                return push('/any-reason')
            }

        }, 1000);
    }


    useEffect(() => {
        const reasonProduct = async () => {
            const initialUrl = `https://www.turnover.gotopdev.com/api/v1/store-reason-refund?key=2c4c5a3b-5289-4b26-9cea-43b955bb1881&product_id=${product_id}`
            fetch(initialUrl)
                .then(response => response.json())
                .then(({ data }) => {
                    setReason(data)
                })
        };
        reasonProduct();
    }, []);


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
                    <div id="article-reason">
                        <span id='reason-refud'>Indica la raz??n de tu devoluci??n</span>

                        <div id='container-radios'>
                            {Object.entries(reason).length === 0 ? (<><div className='spinner'></div></>) : (<>
                                {reason.map((text_reason) => {
                                    return (
                                        <>
                                            <label htmlFor={text_reason.id} className='label-radio'>
                                                <input type="radio" id={text_reason.id} name="razon_devolucion" value={text_reason.name} onChange={changeRadio} />
                                                <span>{text_reason.name}</span>
                                            </label>
                                        </>
                                    )
                                })
                                }
                            </>)}

                        </div>

                        <div id='container-input'>
                            <label htmlFor="comentary" id='comentary-label'>Comentarios (opcional)</label>
                            <textarea type="text" id='comentary' name='comentario' placeholder='Escribe aqu??' onChange={changeRadio} />
                        </div>

                        {!radio.razon_devolucion ?
                            (<>
                                <div id='container-btn-reason'>
                                    <button id='btn-reason'><span>Confirmar devoluci??n</span></button>
                                </div>
                            </>) :
                            (<>
                                <div id='container-btn-reason' onClick={submitReason}>
                                    <button id='btn-reason-active'><span>Confirmar devoluci??n</span></button>
                                </div>
                            </>)}

                    </div>
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

export default ReasonRefud