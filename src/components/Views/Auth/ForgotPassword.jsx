import React from 'react'
import './Styles/ForgotPassword.css'

const ForgotPassword = () => {
  return (
    <div className='container-forgot'>
      <img src="https://www.turnover.gotopdev.com/assets/images/LogoAzul.png" alt="turnover" />
      <div className='form-forgot'>
        <input type="text" placeholder='Introduce tu e-mail' />
        <button className='btn-forgot'><span className='span-forgot'>Recuperar contraseña</span></button>
      </div>
    </div>
  )
}

export default ForgotPassword