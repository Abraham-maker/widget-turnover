import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './styles/Products.css'

const Products = ({ setOpenModal }) => {
    const { push } = useHistory();
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

            <div id='container-product'>
                <h3 id='title-product'>Devoluciones</h3>
                <div id='article-product'>

                    <div id="item-product">

                        <div id='items'>
                            <div id='container-checkBox'>
                                <input type="checkbox" name="my-checkbox" id="opt-in" />
                                <label for="opt-in"></label>
                            </div>
                            <img src="https://us.123rf.com/450wm/redrockerz/redrockerz1601/redrockerz160100016/50854987-camisa-de-ilustraci%C3%B3n-de-bosquejo-del-dise%C3%B1o.jpg?ver=6" alt="" width={150} height={180} />
                            <div>
                                <p id='text-header'>Camisa Oversize X</p>
                                <p className='text-normal'>Ref. 1287654</p>
                                <p className='text-normal'>Size S</p>
                                <p className='text-normal'>Colours</p>
                            </div>
                            <p id='text-header'>59,90€</p>
                        </div>
                    </div>

                </div>
                <button id="start-products">
                    <span>Iniciar Devolucion</span>
                </button>
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

export default Products