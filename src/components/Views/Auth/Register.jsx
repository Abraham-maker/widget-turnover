import React, { useContext, useState } from 'react'
import { WebContext } from '../../../config/Context/Context'
import BtnFaqs from '../../Layout/btn-faqs/BtnFaqs'
import './Styles/Register.css'
import { useHistory } from 'react-router-dom'


const Register = ({ setOpenModal }) => {
  const { push } = useHistory()
  const [open, setOpen] = useState(false);
  const { register, setRegister, onRegister, messageRegister, checked, setChecked, datosUser } = useContext(WebContext)
  const { errors, status } = messageRegister;

  const { data } = datosUser;
  const { api2cart_user } = data;
  const { email, last_name, first_name } = api2cart_user;
  console.log(last_name);
  {/* ALERTAS */ }
  const { terms, password_confirmation, address, postal_code, city, password } = errors ?? false;

  const password_confirmationMessage = (password_confirmation ?? [])[0];
  const addressMessage = (address ?? [])[0];
  const postal_codeMessage = (postal_code ?? [])[0];
  const cityMessage = (city ?? [])[0];
  const passwordMessage = (password ?? [])[0];
  const terminos = (terms ?? [])[0]
  {/* END ALERTAS */ }

  console.log(datosUser);
  const inputChange = ({ target }) => {
    const { name, value } = target;
    setRegister({ ...register, [name]: value })
  }

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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

      <div id='container-register'>
        <img src="https://www.turnover.gotopdev.com/assets/images/LogoAzul.png" alt="turnover" />

        <div id="form-regiter">
          <input type="email" id='input-email' placeholder='E-mail' name='email' defaultValue={email} disabled />


          <div id='group-input'>
            <div>
              <input type="password" id='input-password' placeholder='Contraseña' name='password' onChange={inputChange} />
              {passwordMessage ? (<p className='message-error'>{passwordMessage}</p>) : false}
            </div>
            <div>
              <input type="password" id='input-password' placeholder='Confirmar contraseña' name='password_confirmation' onChange={inputChange} />
              {password_confirmationMessage ? (<p className='message-error'>{password_confirmationMessage}</p>) : false}
            </div>
          </div>

          <div id='group-input'>
            <div>
              <input type="text" id='input-name' placeholder='Nombre' name='first_name' defaultValue={first_name} disabled />
            </div>
            <div>
              <input type="text" id='input-name' placeholder='Apellidos' name='last_name' defaultValue={last_name} disabled />
            </div>
          </div>

          <input type="text" id='input-email' placeholder='Dirección' name='address' onChange={inputChange} />

          {addressMessage ? (<p className='message-error'>{addressMessage}</p>) : false}

          <div id='group-input'>
            <div>
              <input type="text" id='input-name' placeholder='Codigo postal' name='postal_code' onChange={inputChange} />
              {postal_codeMessage ? (<p className='message-error'>{postal_codeMessage}</p>) : false}
            </div>
            <div>
              <input type="text" id='input-name' placeholder='Ciudad' name='city' onChange={inputChange} />
              {cityMessage ? (<p className='message-error'>{cityMessage}</p>) : false}
            </div>
          </div>

          <input type="checkbox" id="term" name="terms" onChange={handleChange} />

          <label htmlFor="term">Estoy de acuerdo con los <span id='terminos'>Términos y Condiciones</span></label>

          {terminos ? (<p className='message-error'>{terminos}</p>) : false}

          {status === 'Success' ? (<p className='message-success'>Su nuevo registro de usuario resultó exitoso</p>) : false}

          {register.password === undefined || '' || '' || register.address === undefined || '' || register.postal_code === undefined || '' || register.city === undefined || ''
            ? (<>
              <button id='btn-createAccount' disabled><span id='span-createAccount'>Crear cuenta</span></button>
            </>) :
            (<>
              <button id='btn-createAccount-active' onClick={onRegister}><span id='span-active'>Crear cuenta</span></button>
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
                <button className='btn-accept' onClick={closeModal}>Aceptar</button>
              </div>
            </div>
          </div>
        </>) : false}
    </>
  )
}

export default Register