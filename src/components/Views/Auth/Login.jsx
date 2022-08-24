import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { WebContext } from '../../../config/Context/Context';
import './Styles/Login.css'

const Login = () => {
    const { push } = useHistory();
    const { onSubmit, user, setUser, infoLogin } = useContext(WebContext)
    const { errors, message } = infoLogin;
    const { email } = errors ?? false;
    const { password } = errors ?? false;
    const password_default = (password ?? [])[0];
    const email_defautl = (email ?? [])[0]

    const inputChange = ({ target }) => {
        const { name, value } = target;
        setUser({ ...user, [name]: value })
    }

    return (
        <>
            <div className='container__login'>
                <img src="https://www.turnover.gotopdev.com/assets/images/LogoAzul.png" alt="turnover" />
                <div className='container-form__login'>

                    <input type="text" placeholder='Introduce tu e-mail' name='email' onChange={inputChange} />
                    {email ? (<p className='alerta__login'>{email_defautl}</p>) : false}
                    {message === 'El email no existe' ? (<p className='alerta__login'>{message}</p>) : false}

                    <input type="password" placeholder='Contraseña' name='password' onChange={inputChange} />

                    {password ? (<p className='alerta__login'>{password_default}</p>) : false}

                </div>
                <button className='btn-login' onClick={onSubmit}>
                    <span className='span-login'>
                        Entrar
                    </span>
                </button>
                <p className='view-forgot__password' onClick={() => { push('/forgot-password') }}>¿Has olvidado la contraseña?</p>
                <hr />
                <button className='btn-create-login' onClick={() => { push('/register') }}><span className='span-create'>Crear cuenta</span></button>
            </div>
        </>
    )
}

export default Login