import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { WebContext } from '../../../config/Context/Context';
import './Styles/Login.css'
import BtnFaqs from '../../Layout/btn-faqs/BtnFaqs'

const Login = ({ setOpenModal }) => {
    const { push } = useHistory();
    const [open, setOpen] = useState(false);
    const { onSubmit, user, setUser, infoLogin, loading, findOrder } = useContext(WebContext)
    const { errors, message } = infoLogin;
    const { email } = errors ?? false;
    const { password } = errors ?? false;
    const password_default = (password ?? [])[0];
    const email_defautl = (email ?? [])[0]
    
    const inputChange = ({ target }) => {
        const { name, value } = target;
        setUser({ ...user, [name]: value })
    }

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

            <div id='container__login'>
                <img src="https://www.turnover.gotopdev.com/assets/images/LogoAzul.png" alt="turnover" />
                <div id='form-container__login'>

                    <input type="text" placeholder='Introduce tu e-mail' name='email' defaultValue={findOrder.email} disabled/>

                    {email ? (<p className='message-error'>{email_defautl}</p>) : false}
                    {message === 'El email no existe' ? (<p className='message-error'>{message}</p>) : false}

                    <input type="password" placeholder='Contraseña' name='password' onChange={inputChange} />

                    {password ? (<p className='message-error'>{password_default}</p>) : false}

                </div>
                <button id='btn-login' onClick={onSubmit}>
                    <span id='span-login'>
                        Entrar
                    </span>
                </button>
                {!!loading ? <span className='spinner'></span> : false}
                <p id='link-forgot' onClick={() => { push('/forgot-password') }}>¿Has olvidado la contraseña?</p>
                <hr />
                {/* <button disabled id='btn-register'><span id='span-register'>Crear cuenta</span></button> */}
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

export default Login