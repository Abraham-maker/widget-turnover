import React from 'react'
import { useHistory } from 'react-router-dom'
import './Styles/Login.css'

const Login = () => {
    const { push } = useHistory();

    return (
        <>
            <div className='container__login'>
                <img src="https://www.turnover.gotopdev.com/assets/images/LogoAzul.png" alt="turnover" />
                <div className='container-form__login'>
                    <input type="text" placeholder='Introduce tu e-mail' />
                    <input type="password" placeholder='Contraseña' />
                </div>
                <button className='btn-login'>
                    <span className='span-login'>
                        Entrar
                    </span>
                </button>
                <p className='view-forgot__password'>¿Has olvidado la contraseña?</p>
                <hr />
                <button className='btn-create-login'><span className='span-create'>Crear cuenta</span></button>
            </div>
        </>
    )
}

export default Login