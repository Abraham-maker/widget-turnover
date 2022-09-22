import React, { useContext, useState } from 'react'
import { WebContext } from '../../../Context/Context'
import './list_orders.css'
import { useHistory } from 'react-router-dom'

const ListOrders = ({ setOpenModal }) => {
  const { push } = useHistory()
  const [open, setOpen] = useState(false);
  const { orderList } = useContext(WebContext);
  const [order_id, setOrderId] = useState(false)
  const { order } = orderList

  const closeModal = () => {
    window.localStorage.removeItem('InfoLogin', true)
    push('/')
    setOpenModal(false)
  }

  const sendId = () => {
    return push(`/product-order/${order_id}`)
  }

  return (
    <>

      <div className='container_icons'>
        <div className='icon__arrow' onClick={() => { return window.history.back() }}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
        <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>
      </div>
      <h3 id='title-listOrders'>Historial de pedidos</h3>

      {Object.entries(order).length === 0 ? (<> <div className="background-spinner">
        <span className='spinner'></span>
      </div></>) :
        (<>

          <div id="container-order_list">
            {order.map((items) => {
              return (
                <>
                  <div id="container-order">
                    <div id="orders">
                      <div id="radios-order">
                        <label htmlFor={items.order_id} className='label-radio'>
                          <input type="radio" id={items.order_id} onChange={() => { setOrderId(items.order_id) }} name="my-checkbox" />
                          <span></span>
                        </label>
                      </div>

                      <div id="orders-text">
                        <div id="orders-flex">
                          <span>Pedido nº {items.order_id}</span>
                          <span>{items.total}€</span>
                        </div>
                        <span>Fecha: {items.create_at}</span>
                        <span>Productos: {items.number_of_items}</span>
                      </div>

                    </div>
                  </div>
                </>
              )
            })}
          </div>

          <div id="center-btn-order">

            {order_id ? (<>
              <button id='active-order' onClick={sendId}>Siguiente</button>
            </>) : (<>
              <button id='disabled-order'>Siguiente</button>
            </>)}
          </div>

        </>)}


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

export default ListOrders