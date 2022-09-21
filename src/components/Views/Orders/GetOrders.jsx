import React, { useContext, useState } from 'react'
import './styles/GetOrders.css'
import BtnFaqs from '../../Layout/btn-faqs/BtnFaqs'
import { WebContext } from '../../../config/Context/Context'
import { useHistory } from 'react-router-dom'
import Loading from '../../../common/Loading'

const GetOrders = ({ setOpenModal }) => {
  const { push } = useHistory()
  const { findOrder, setFindOrder, onFindOrder, messageOrder, loading } = useContext(WebContext)
  const [open, setOpen] = useState(false);
  const { message, status } = messageOrder

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setFindOrder({ ...findOrder, [name]: value })
  }

  const closeModal = () => {
    window.localStorage.removeItem('InfoLogin', true)
    push('/')
    setOpenModal(false)
  }


  return (
    <>
      {!!loading ? (<Loading />) : false}
      <div className='container_icons'>
        <div className='icon__arrow' onClick={() => { return window.history.back() }}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
        <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>
      </div>

      <div id='container__getorder'>
        <img src="https://www.turnover.gotopdev.com/assets/images/LogoAzul.png" alt="turnover" />
        <div id='form-getOrders'>
          <input type="text" name="email" placeholder='Introduce tu e-mail' onChange={inputChange} />
          {status === 'Error' ? (<p className='message-error'>{message}</p>) : false}
          <button id='btn-orders' onClick={onFindOrder}><span id='span-orders'>Obtener órdenes</span></button>
        </div>
      </div>

      <BtnFaqs />
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

export default GetOrders