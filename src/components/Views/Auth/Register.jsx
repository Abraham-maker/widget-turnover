import React from 'react'
import './Styles/Register.css'

const Register = () => {
  return (
    <>
      <div className='container__register'>
        <img src="https://www.turnover.gotopdev.com/assets/images/LogoAzul.png" alt="turnover" />
        <div className="form-regiter">
          <input type="email" className='input-email' placeholder='E-mail' />

          <div className='group-input'>
            <input type="password" className='input-password' placeholder='Contraseña' />
            <input type="password" className='input-password' placeholder='Confirmar contraseña' />
          </div>

          <div className='group-input'>
            <input type="text" className='input-name' placeholder='Nombre' />
            <input type="text" className='input-name' placeholder='Apellidos' />
          </div>

          <input type="text" className='input-email' placeholder='Dirección' />

          <div className='group-input'>
            <input type="text" className='input-name' placeholder='Codigo postal' />
            <input type="text" className='input-name' placeholder='Ciudad' />
          </div>
          
          <input type="checkbox" id="fruit1" name="fruit-1" value="Apple" />
          <label for="fruit1">Estoy de acuerdo con los <span className='terminos'>Términos y Condiciones</span></label>

          <button className='btn-crear__cuenta'><span className='span-crear__cuenta'>Crear cuenta</span></button>
        </div>
      </div>
    </>
  )
}

export default Register