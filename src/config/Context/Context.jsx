import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const WebContext = React.createContext();

function WebProvider(props) {
    const { push } = useHistory();
    {/* LOGIN */ }
    const [user, setUser] = useState({ email: '', password: '' })
    const [infoLogin, setInfoLogin] = useState({});
    {/* END LOGIN */ }

    {/* FORGOT PASSWORD */ }
    const [emailForgotPass, setEmailForgotPass] = useState({ email: "" });
    const [informationForgot, setInformationForgot] = useState({})
    const validateEmail = informationForgot.hasOwnProperty('email');
    {/* END FORGOT PASSWORD */ }

    {/* REGISTER */ }
    const [checked, setChecked] = useState(0)
    const [register, setRegister] = useState({})
    const [messageRegister, setMessageRegister] = useState({});
    {/* END REGISTER*/ }

    {/* FIND ORDER */ }
    const [findOrder, setFindOrder] = useState({})
    const { email } = findOrder
    const [messageOrder, setMessageOrder] = useState({});
    {/* END FIND ORDER */ }

    {/* REQUEST LOGIN */ }
    const onSubmit = () => {
        const url = "https://www.turnover.gotopdev.com/api/v1/login"

        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        };

        fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(user),
        }).then((res) => res.json()).then((infoLogin) => {
            setInfoLogin(infoLogin);
            if (infoLogin.status === 'Success') {
                window.localStorage.setItem("InfoLogin", JSON.stringify(infoLogin))
                setUser({ email: '', password: '' })
            }
            setTimeout(() => {
                setInfoLogin({})
            }, 6000);
        })

        {/* END REQUEST LOGIN */ }
    }

    {/* REQUEST FORGOT PASSWORD */ }
    const sendEmail = () => {
        const url = "https://www.turnover.gotopdev.com/api/v1/forgot-password";
        fetch(url, {
            method: 'POST', body: JSON.stringify(emailForgotPass),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        }).then(res => res.json())
            .then((informationForgot) => {
                setInformationForgot(informationForgot)
                setTimeout(() => {
                    setInformationForgot({})
                }, 6000);
            })
    }
    {/* END REQUEST FORGOT PASSWORD */ }

    {/* REQUEST REGISTER */ }
    const onRegister = () => {
        const urlRegister = "https://www.turnover.gotopdev.com/api/v1/register?key=2c4c5a3b-5289-4b26-9cea-43b955bb1881"

        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        };

        let body = {
            "first_name": register.first_name,
            "last_name": register.last_name,
            "postal_code": register.postal_code,
            "city": register.city,
            "address": register.address,
            "email": register.email,
            "password": register.password,
            "password_confirmation": register.password_confirmation,
            "terms": checked
        }

        fetch(urlRegister, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        }).then(response => response.json())
            .then((messageRegister) => {
                setMessageRegister(messageRegister)
                setTimeout(() => {
                    setMessageRegister({})
                }, 8000);
                if (messageRegister.status === 'Success') {
                    setTimeout(() => {
                        setChecked(0)
                        push('/')
                    }, 6000);
                }
            })
    }
    {/* END REQUEST REGISTER */ }

    {/* FIND ORDER */ }
    const onFindOrder = async () => {
        await fetch(`https://www.turnover.gotopdev.com/api/v1/customer?key=2c4c5a3b-5289-4b26-9cea-43b955bb1881&email=${email}`)
            .then(response => response.json())
            .then((messageOrder) => {
                setMessageOrder(messageOrder)
                const { data } = messageOrder ?? false;
                const { api2cart_user, turnover_user } = data;
                if (turnover_user === null && api2cart_user !== null) {
                    return push('/register')
                } else {
                    return push('/login')
                }
            })
    }
    {/* END FIND ORDER */ }

    return (
        <WebContext.Provider value={{ user, setUser, onSubmit, infoLogin, emailForgotPass, setEmailForgotPass, validateEmail, informationForgot, setInformationForgot, sendEmail, register, setRegister, onRegister, messageRegister, checked, setChecked, findOrder, setFindOrder, onFindOrder, messageOrder }}>
            {props.children}
        </WebContext.Provider>
    )
}

<WebContext.Consumer />;

export { WebContext, WebProvider };