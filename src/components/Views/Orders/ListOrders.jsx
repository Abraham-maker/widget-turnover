import React, { useContext, useState } from 'react'
import { WebContext } from '../../../config/Context/Context'
import './styles/ListOrders.css'
import { useHistory } from 'react-router-dom'

const ListOrders = ({ setOpenModal }) => {
  const { push } = useHistory()
  const [open, setOpen] = useState(false);
  const { orderList } = useContext(WebContext);
  const { order } = orderList

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
      <div className='container-table'>
        <table>
          <thead>
            <tr>
              <th scope="col">Número de artículo</th>
              <th scope="col">Id de la orden</th>
              <th scope="col">Estado</th>
              <th scope="col">Total</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            {order.map(items => {
              return (
                <tr key={items.order_id}>
                  <td>{items.number_of_items}</td>
                  <td>{items.order_id}</td>
                  <td>{items.status}</td>
                  <td>{items.total}€</td>
                  <td className='productos-btn' onClick={() => { push('/product-order') }}>Productos</td>
                </tr>
              )
            })}
          </tbody>
        </table>
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

// demo@trackglobe.com
export default ListOrders