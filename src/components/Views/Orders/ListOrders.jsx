import React, { useContext, useState } from 'react'
import { WebContext } from '../../../config/Context/Context'
import './styles/ListOrders.css'
import { useHistory } from 'react-router-dom'
import Table from './Table/Table'


const ListOrders = ({ setOpenModal }) => {
  const { push } = useHistory()
  const [open, setOpen] = useState(false);
  const { orderList } = useContext(WebContext);
  const { order } = orderList
  const [table] = useState([...order])

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

      <h3 id='title-listOrders'>Devoluciones</h3>
      <div id='container-table'>
        {Object.entries(order).length === 0 ? (<><div className='spinner'></div></>) :
          (<>
            <Table data={table} rowsPerPage={5} />
          </>)}
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

export default ListOrders