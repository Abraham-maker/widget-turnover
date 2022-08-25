import React, { useContext, useState } from 'react'
import { WebContext } from '../../../config/Context/Context'
import BtnFaqs from '../../Layout/btn-faqs/BtnFaqs'
import './Styles/Register.css'

const Register = ({ setOpenModal }) => {
  const [open, setOpen] = useState(false);
  const { register, setRegister, onRegister, messageRegister, checked, setChecked } = useContext(WebContext)
  const { errors, status } = messageRegister;
  {/* ALERTAS */ }
  const { terms, email, password_confirmation, address, postal_code, city, first_name, last_name, password } = errors ?? false;

  const emailMessage = (email ?? [])[0];
  const password_confirmationMessage = (password_confirmation ?? [])[0];
  const addressMessage = (address ?? [])[0];
  const postal_codeMessage = (postal_code ?? [])[0];
  const cityMessage = (city ?? [])[0];
  const first_nameMessage = (first_name ?? [])[0];
  const last_nameMessage = (last_name ?? [])[0];
  const passwordMessage = (password ?? [])[0];
  const terminos = (terms ?? [])[0]
  {/* END ALERTAS */ }


  const inputChange = ({ target }) => {
    const { name, value } = target;
    setRegister({ ...register, [name]: value })
  }

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <div className='container_icons'>
        <div className='icon__arrow' onClick={() => { return window.history.back() }}><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
        <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>
      </div>
      <div className='container__register'>
        <img src="https://www.turnover.gotopdev.com/assets/images/LogoAzul.png" alt="turnover" />
        <div className="form-regiter">
          <input type="email" className='input-email' placeholder='E-mail' name='email' onChange={inputChange} />
          {emailMessage ? (<p className='alerta__register'>{emailMessage}</p>) : false}
          <div className='group-input'>
            <div>
              <input type="password" className='input-password' placeholder='Contraseña' name='password' onChange={inputChange} />
              {passwordMessage ? (<p className='alerta__register'>{passwordMessage}</p>) : false}
            </div>
            <div>
              <input type="password" className='input-password' placeholder='Confirmar contraseña' name='password_confirmation' onChange={inputChange} />
              {password_confirmationMessage ? (<p className='alerta__register'>{password_confirmationMessage}</p>) : false}
            </div>
          </div>

          <div className='group-input'>
            <div>
              <input type="text" className='input-name' placeholder='Nombre' name='first_name' onChange={inputChange} />
              {first_nameMessage ? (<p className='alerta__register'>{first_nameMessage}</p>) : false}
            </div>
            <div>
              <input type="text" className='input-name' placeholder='Apellidos' name='last_name' onChange={inputChange} />
              {last_nameMessage ? (<p className='alerta__register'>{last_nameMessage}</p>) : false}
            </div>
          </div>

          <input type="text" className='input-email' placeholder='Dirección' name='address' onChange={inputChange} />
          {addressMessage ? (<p className='alerta__register'>{addressMessage}</p>) : false}
          <div className='group-input'>
            <div>
              <input type="text" className='input-name' placeholder='Codigo postal' name='postal_code' onChange={inputChange} />
              {postal_codeMessage ? (<p className='alerta__register'>{emailMessage}</p>) : false}
            </div>
            <div>
              <input type="text" className='input-name' placeholder='Ciudad' name='city' onChange={inputChange} />
              {cityMessage ? (<p className='alerta__register'>{cityMessage}</p>) : false}
            </div>
          </div>

          <input type="checkbox" id="check1" name="terms" onChange={handleChange} />
          <label htmlFor="check1">Estoy de acuerdo con los <span className='terminos'>Términos y Condiciones</span></label>
          {terminos ? (<p className='alerta__register'>{terminos}</p>) : false}
          {status === 'Success' ? (<p className='alerta__register-success'>Su nuevo registro de usuario resultó exitoso</p>) : false}

          {register.email === undefined || '' || register.password === undefined || '' || register.first_name === undefined || '' || register.last_name === undefined || '' || register.address === undefined || '' || register.postal_code === undefined || '' || register.city === undefined || ''
            ? (<>
              <button className='btn-crear__cuenta' disabled><span className='span-crear__cuenta'>Crear cuenta</span></button>
            </>) :
            (<>
              <button className='btn-crear__cuenta-active' onClick={onRegister}><span className='span-crear__cuenta-active'>Crear cuenta</span></button>
            </>)
          }

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
                <button className='btn-accept' onClick={() => setOpenModal(false)}>Aceptar</button>
              </div>
            </div>
          </div>
        </>) : false}
    </>
  )
}

export default Register