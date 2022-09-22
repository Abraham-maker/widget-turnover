import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { WebContext } from '../../Context/Context'
import './Styles/ForgotPassword.css'
import BtnFaqs from '../../Layout/btn-faqs/BtnFaqs'


const ForgotPassword = ({ setOpenModal }) => {
  const { push } = useHistory();
  const [open, setOpen] = useState(false);
  const { emailForgotPass, setEmailForgotPass, validateEmail, informationForgot, sendEmail, loading } = useContext(WebContext);
  const { status, message } = informationForgot;
  const { email } = informationForgot;
  const errorEmail = (email ?? [])[0];

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setEmailForgotPass({ ...emailForgotPass, [name]: value })
  }

  const closeModal = () => {
    window.localStorage.removeItem('InfoLogin', true)
    push('/')
    setOpenModal(false)
  }

  return (
    <>

      <div className='container_icons'>
        <div className='icon__arrow' onClick={() => { return window.history.back() }}><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
        <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>
      </div>

      <div id='container-forgot'>
        <img src="https://www.turnover.gotopdev.com/assets/images/LogoAzul.png" alt="turnover" />
        <div id='form-forgot'>
          <input type="email" placeholder='Introduce tu e-mail' onChange={inputChange} name="email" />

          {errorEmail ?
            (<>
              <p className='message-error'>{errorEmail}</p>
            </>) : false}

          {validateEmail === false && status === 'Error' ?
            (<>
              <p className='message-error'>{message}</p>
            </>) : false}

          {informationForgot.status === "Success" ?
            (<>
              <p className='message-success'>Le hemos enviado su enlace de restablecimiento de contraseña por correo electrónico</p>
            </>) : false}

          <button id='btn-forgot' onClick={sendEmail}><span id='span-forgot'>Recuperar contraseña</span></button>
          {!!loading ? <div className="background-spinner">
            <span className='spinner'></span>
          </div> : false}
        </div>
        <p id='link-login' onClick={() => { push('/login') }}>Login</p>
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

export default ForgotPassword