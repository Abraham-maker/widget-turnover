import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { WebContext } from '../../../config/Context/Context'
import './Styles/ReturnProductStore.css'

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
            const initialUrl = `https://www.turnover.gotopdev.com/api/v1/branch-stores?key=2c4c5a3b-5289-4b26-9cea-43b955bb1881&product_id=${product_id}`
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
                        {Object.entries(stores).length === 0 ?
                            (<>
                                <div className='spinner2'></div>
                            </>) :
                            (<>
                                {stores.map((items) => {

                                    return (<>
                                        <div id='stores-div' key={items.id}>
                                            <input type="radio" id={items.id} name="stores" value={items.id} onChange={changeStore} />
                                            <label for={items.id}>{items.name}</label>
                                            <div>
                                                <p className='store-date'>{items.address}</p>
                                            </div>
                                        </div>
                                    </>)
                                })}
                            </>)}
                    </div>
                    {!!loading ? (<><div className='spinner'></div></>) : false}

                </div>

                {Object.entries(idStore).length === 0 ? (<>
                    <button id='btn-stores'>Confirmar devolución</button>
                </>) : (<>
                    <button id='btn-stores-active' onClick={getCodeStore}>Confirmar devolución</button>
                </>)}
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

export default ReturnProductStore