import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const WebContext = React.createContext();

function WebProvider(props) {
    const { push } = useHistory();
    const [loading, setLoading] = useState(false)
    const dates = JSON.parse(window.localStorage.getItem('dates', true));
    {/* LOGIN */ }
    const [user, setUser] = useState({})
    const [infoLogin, setInfoLogin] = useState({});
    const color_storage = JSON.parse(localStorage.getItem('product_color'));
    const total_storage = JSON.parse(localStorage.getItem('precio_total'));
    const check_storage = JSON.parse(localStorage.getItem('product_check'));
    const radios_storage = JSON.parse(localStorage.getItem('product_radio'));
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
    const [datosUser, setDatosUser] = useState({})
    const { data } = datosUser;
    const { api2cart_user } = data ?? false;
    {/* END REGISTER*/ }

    {/* FIND ORDER */ }
    const [findOrder, setFindOrder] = useState({})
    const { email } = findOrder
    const [messageOrder, setMessageOrder] = useState({});
    const [orderList, setOrderlist] = useState({});
    {/* END FIND ORDER */ }
    {/* REQUEST LOGIN */ }
    const onSubmit = () => {
        setLoading(true);

        const url = "https://www.turnover.gotopdev.com/api/v1/login"

        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        };

        let body = {
            email: findOrder.email,
            password: user.password,
        }

        fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        }).then((res) => res.json()).then((infoLogin) => {
            setLoading(false);
            setInfoLogin(infoLogin);
            if (infoLogin.status === 'Success') {
                push('/home-options')
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
        setLoading(true);
        const url = "https://www.turnover.gotopdev.com/api/v1/forgot-password";
        fetch(url, {
            method: 'POST', body: JSON.stringify(emailForgotPass),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        }).then(res => res.json())
            .then((informationForgot) => {
                setLoading(false);
                setInformationForgot(informationForgot)
                setTimeout(() => {
                    setInformationForgot({})
                }, 6000);
            })
    }
    {/* END REQUEST FORGOT PASSWORD */ }

    {/* REQUEST REGISTER */ }
    const onRegister = () => {
        setLoading(true);
        const urlRegister = "https://www.turnover.gotopdev.com/api/v1/register?key=2c4c5a3b-5289-4b26-9cea-43b955bb1881"

        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        };

        let body = {
            "first_name": api2cart_user.first_name,
            "last_name": api2cart_user.last_name,
            "postal_code": register.postal_code,
            "city": register.city,
            "address": register.address,
            "email": api2cart_user.email,
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
                setLoading(false);
                setMessageRegister(messageRegister)
                setTimeout(() => {
                    setMessageRegister({})
                }, 8000);
                if (messageRegister.status === 'Success') {
                    setTimeout(() => {
                        setChecked(0)
                        push('/login')
                    }, 2000);
                }
            })
    }
    {/* END REQUEST REGISTER */ }

    {/* FIND ORDER */ }
    const onFindOrder = async () => {
        setLoading(true);
        await fetch(`https://www.turnover.gotopdev.com/api/v1/customer?key=2c4c5a3b-5289-4b26-9cea-43b955bb1881&email=${email}`)
            .then(response => response.json())
            .then((messageOrder) => {
                setMessageOrder(messageOrder)
                setLoading(false);
                setTimeout(() => {
                    setMessageOrder({})
                }, 6000);
                if (messageOrder.status === 'Success') {
                    return push('/home-options')
                }
            })
    }

    const listOrder = async () => {
        setLoading(true);
        await fetch(`https://www.turnover.gotopdev.com/api/v1/customer-orders?key=2c4c5a3b-5289-4b26-9cea-43b955bb1881&email=${email}`)
            .then(response => response.json())
            .then(({ data }) => {
                setLoading(false);
                setOrderlist(data);
                push('/list-order')
            })
    }

    {/* END FIND ORDER */ }

    return (
        <WebContext.Provider value={{ user, setUser, onSubmit, infoLogin, emailForgotPass, setEmailForgotPass, validateEmail, informationForgot, setInformationForgot, sendEmail, register, setRegister, onRegister, messageRegister, checked, setChecked, findOrder, setFindOrder, onFindOrder, messageOrder, listOrder, orderList, datosUser, loading, setLoading, dates, color_storage, total_storage, radios_storage, check_storage }}>
            {props.children}
        </WebContext.Provider>
    )
}

<WebContext.Consumer />;

export { WebContext, WebProvider };