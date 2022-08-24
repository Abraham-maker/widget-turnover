import React, { useState } from 'react'
import './GetOrders.css'

const GetOrders = () => {
  const [searchOrder, setSearchOrder] = useState({})

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setSearchOrder({ ...searchOrder, [name]: value })
  }

  return (
    <>
      <div className='container__getorder'>
        <img src="https://www.turnover.gotopdev.com/assets/images/LogoAzul.png" alt="turnover" />
        <div className='form__find-order'>
          <input type="text" name="email" placeholder='Introduce tu e-mail' onChange={inputChange} />
          <button className='btn-orders'><span className='span-orders'>Obtener órdenes</span></button>
        </div>
      </div>
    </>
  )
}

export default GetOrders