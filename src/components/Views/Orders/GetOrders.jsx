import React, { useState } from 'react'
import './GetOrders.css'

const GetOrders = ({ setOpenModal }) => {
  const [searchOrder, setSearchOrder] = useState({})
  const [open, setOpen] = useState(false);

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setSearchOrder({ ...searchOrder, [name]: value })
  }

  return (
    <>
      <div className='container_icons'>
        <div className='icon__arrow' onClick={() => { return window.history.back() }}><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
        <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>
      </div>
      <div className='container__getorder'>
        <img src="https://www.turnover.gotopdev.com/assets/images/LogoAzul.png" alt="turnover" />
        <div className='form__find-order'>
          <input type="text" name="email" placeholder='Introduce tu e-mail' onChange={inputChange} />
          <button className='btn-orders'><span className='span-orders'>Obtener órdenes</span></button>
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
              <button className='btn-accept' onClick={() => setOpenModal(false)}>Aceptar</button>
            </div>
          </div>
        </div>
      </>) : false}
    </>
  )
}

export default GetOrders