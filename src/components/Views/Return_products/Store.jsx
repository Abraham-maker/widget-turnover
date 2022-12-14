import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Loading from '../../../common/Loading'
import { WebContext } from '../../Context/Context'
import './store.css'


const ReturnProductStore = ({ setOpenModal }) => {
    const { setLoading, loading } = useContext(WebContext);
    const { push } = useHistory()
    const [open, setOpen] = useState(false);
    let product_id = JSON.parse(window.localStorage.getItem("product_id", true));
    const [stores, setStores] = useState([])
    const [idStore, setIdStore] = useState({})

    const closeModal = () => {
        window.localStorage.removeItem('InfoLogin', true)
        push('/')
        setOpenModal(false)
    }

    useEffect(() => {
        const findId = async () => {
            const initialUrl = `https://www.turnover.gotopdev.com/api/v1/stores-branchs?key=2c4c5a3b-5289-4b26-9cea-43b955bb1881`
            fetch(initialUrl)
                .then(response => response.json())
                .then(({ data }) => {
                    setStores(data)
                })
        };
        findId();
    }, [])

    const changeStore = ({ target }) => {
        setIdStore(target.value);
    }

    const getCodeStore = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
            push('/view-refud-success')
        }, 1000);
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

                    <div id="return-store">
                        <div>
                            <div className='container-radio'>
                                <label htmlFor="test" className='label-radio'>
                                    <input type="radio" id="test1" name="radio-group" checked />
                                    <span>Devolver tu producto en Tienda</span>
                                </label>
                                <span id='span-store'>Gratuito</span>
                            </div>
                            <div>
                                <p className='store-date'>Estimada hasta al marte 08 mar. - martes 15 mar.</p>
                                <p className='store-info'>+ info</p>
                            </div>
                            <p id='paragraph-store'>Elegir tienda</p>
                        </div>
                    </div>

                    <div id="container-stores">
                        <div id='stores'>
                            {Object.entries(stores).length === 0 ?
                                (<>
                                    <div className='spinner2'></div>
                                </>) :
                                (<>
                                    {stores.map((items) => {

                                        return (<>
                                            <div id='stores-div' key={items.id}>
                                                <label htmlFor={items.id} className='label-radio' >
                                                    <input type="radio" id={items.id} name="stores" value={items.id} onChange={changeStore} />
                                                    <span>{items.name}</span>
                                                </label>

                                                <div>
                                                    <p className='store-date'>{items.address}</p>
                                                </div>
                                            </div>
                                        </>)
                                    })}
                                </>)}
                        </div>
                    </div>

                    {Object.entries(idStore).length === 0 ? (<>
                        <button id='btn-stores'>Confirmar devoluci??n</button>
                    </>) : (<>
                        <button id='btn-stores-active' onClick={getCodeStore}>Confirmar devoluci??n</button>

                    </>)}
                </div>
            </div>


            {
                open ?
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
                    </>) : false
            }

        </>
    )
}

export default ReturnProductStore