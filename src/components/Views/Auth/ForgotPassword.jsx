import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { WebContext } from '../../../config/Context/Context'
import './Styles/ForgotPassword.css'

const ForgotPassword = () => {
  const { push } = useHistory();
  const { emailForgotPass, setEmailForgotPass, validateEmail, informationForgot, sendEmail } = useContext(WebContext);
  const { status, message } = informationForgot;
  const { email } = informationForgot;
  const errorEmail = (email ?? [])[0];

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setEmailForgotPass({ ...emailForgotPass, [name]: value })
  }


  return (
    <div className='container-forgot'>
      <img src="https://www.turnover.gotopdev.com/assets/images/LogoAzul.png" alt="turnover" />
      <div className='form-forgot'>
        <input type="email" placeholder='Introduce tu e-mail' onChange={inputChange} name="email" />

        {errorEmail ?
          (<>
            <p className='alerta__forgot'>{errorEmail}</p>
          </>) : false}

        {validateEmail === false && status === 'Error' ?
          (<>
            <p className='alerta__forgot'>{message}</p>
          </>) : false}

        {informationForgot.status === "Success" ?
          (<>
            <p className='alerta__forgot-success'>Le hemos enviado su enlace de restablecimiento de contraseña por correo electrónico</p>
          </>) : false}

        <button className='btn-forgot' onClick={sendEmail}><span className='span-forgot'>Recuperar contraseña</span></button>
      </div>
      <p className='view-forgot__password' onClick={() => { push('/') }}>Login</p>
    </div>
  )
}

export default ForgotPassword