import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Styles/ReturnHome.css'
import { WebContext } from '../../../config/Context/Context'
import { useContext } from 'react'


const ReturnHome = ({ setOpenModal }) => {
    const { loading, setLoading } = useContext(WebContext);
    const { push } = useHistory()
    const [open, setOpen] = useState(false);
    const [addressUser, setAddressUser] = useState({})
    const [changeAddress, setChangeAddress] = useState({
        nombre: "",
        apellido: "",
        ciudad: "",
        linea1: "",
        linea2: "",
        codigo_postal: "",
        pais: "",
    })

    const [validates, setValidates] = useState(true);
    let order_id = JSON.parse(window.localStorage.getItem("order_id", true))
    const [check, setCheck] = useState(false)
    const [alertPais, setAlertPais] = useState("")
    const [alertNombre, setAlertNombre] = useState([])
    const [alertApellido, setAlertApellido] = useState("")
    const [alertDireccion1, setAlertDireccion1] = useState("")
    const [alertDireccion2, setAlertDireccion2] = useState("")
    const [alertCodePostal, setAlertCodePostal] = useState("")
    const [alertCiudad, setAlertCiudad] = useState("")
    console.log(check);
    const closeModal = () => {
        window.localStorage.removeItem('InfoLogin', true)
        push('/')
        setOpenModal(false)
    }

    useEffect(() => {
        const getAddress = async () => {
            const address = `https://www.turnover.gotopdev.com/api/v1/order-address?key=2c4c5a3b-5289-4b26-9cea-43b955bb1881&order_id=${order_id}`
            fetch(address)
                .then(response => response.json())
                .then(({ data }) => {
                    setAddressUser(data)
                })
        };
        getAddress();
    }, []);


    const addressChange = ({ target }) => {
        const { name, value } = target;
        setChangeAddress({ ...changeAddress, [name]: value })
    }

    const validateName = () => {
        if (changeAddress.nombre === undefined || changeAddress.nombre.length === 0) {
            setAlertNombre("El nombre es requerido")
            setValidates(false)
        } else if (changeAddress.nombre.length < 5) {
            setAlertNombre("El numero min de caracteres es de 4")
            setValidates(false)
        }
    }

    const validateLastName = () => {
        if (changeAddress.apellido === undefined || changeAddress.apellido.length === 0) {
            setAlertApellido("El apellido es requerido")
            setValidates(false)
        } else if (changeAddress.apellido.length < 5) {
            setAlertApellido("El numero min de caracteres es de 4")
            setValidates(false)
        }
    }

    const validatePais = () => {
        if (changeAddress.pais === undefined || changeAddress.pais.length === 0) {
            setAlertPais("El pais es requerido")
            setValidates(false)
        } else if (changeAddress.pais.length < 5) {
            setAlertPais("El numero min de caracteres es de 5")
            setValidates(false)
        }
    }

    const validateDirection1 = () => {
        if (changeAddress.linea1 === undefined || changeAddress.linea1.length === 0) {
            setAlertDireccion1("La direccion es requerida")
            setValidates(false)
        } else if (changeAddress.linea1.length < 5) {
            setAlertDireccion1("El numero min de caracteres es de 4")
            setValidates(false)
        }
    }

    const validateDirection2 = () => {
        if (changeAddress.linea2 === undefined || changeAddress.linea2.length === 0) {
            setAlertDireccion2("La direccion es requerida")
            setValidates(false)
        } else if (changeAddress.linea2.length < 5) {
            setAlertDireccion2("El numero min de caracteres es de 4")
            setValidates(false)
        }
    }

    const validatePostalCode = () => {
        if (changeAddress.codigo_postal === undefined || changeAddress.codigo_postal.length === 0) {
            setAlertCodePostal("El codigo postal es requerido")
            setValidates(false)
        } else if (changeAddress.codigo_postal.length < 5) {
            setAlertCodePostal("El numero min de caracteres es de 5")
            setValidates(false)
        }
    }

    const validateCity = () => {
        if (changeAddress.ciudad === undefined || changeAddress.ciudad.length === 0) {
            setAlertCiudad("La ciudad es requerida")
            setValidates(false)
        } else if (changeAddress.ciudad.length < 5) {
            setAlertCiudad("El numero min de caracteres es de 5")
            setValidates(false)
        }
    }


    const validate = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
            validateName();
            validateCity();
            validateDirection1();
            validateDirection2();
            validateLastName();
            validatePais();
            validatePostalCode()
        }, 1000);
    }

    useEffect(() => {
        setTimeout(() => {
            setAlertCiudad("");
            setAlertCodePostal("");
            setAlertDireccion2("");
            setAlertDireccion1("");
            setAlertPais("");
            setAlertApellido("");
            setAlertNombre("");
        }, 10000);
    }, [validate])

    const getCode = () => {
        console.log(validate);
        window.localStorage.setItem("address", JSON.stringify(changeAddress))
        push('/view-refud-success')
    }

    return (
        <>

            <div className='container_icons'>
                <div className='icon__arrow' onClick={() => { return window.history.back() }}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
                <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>
            </div>

            <h3 id='title-home'>Devoluciones</h3>

            <div id="return-home">
                {Object.entries(addressUser).length === 0 ?
                    (<>
                        <div className='spinner'></div>
                    </>) :
                    (<>
                        <div id="return-home__container">
                            <div id='container-btn-radio'>
                                <div>
                                    <input type="radio" id="test2" name="radio-group" checked />
                                    <label for="test2">Devolver tu producto en Domicilio</label>
                                    <span id='span-free__home'>Gratuito</span>
                                    <div>
                                        <p className='home-date' >Estimada hasta al jueves 10 Mar. - martes 15 mar.</p>
                                        <p className='home-info'>+ info</p>
                                    </div>
                                </div>
                            </div>

                            <p>Facturación</p>

                            <div id="div-inputs">
                                <div>
                                    <input type="text" id='direccion' onChange={addressChange} name='pais' defaultValue={addressUser?.shipping_address?.country?.name} placeholder='Ciudad' />
                                    {alertPais ? (<><span className='message-error'>{alertPais}</span></>) : false}
                                </div>
                                <div className='div-flex'>
                                    <div>
                                        <input type="text" id='nombre' onChange={addressChange} name='nombre' defaultValue={addressUser?.customer?.first_name} placeholder='Nombre' />
                                        {alertNombre ? (<><span className='message-error'>{alertNombre}</span></>) : false}
                                    </div>
                                    <div>
                                        <input type="text" id='apellido' onChange={addressChange} name='apellido' defaultValue={addressUser?.customer?.last_name} placeholder='Apellido' />
                                        {alertApellido ? (<><span className='message-error'>{alertApellido}</span></>) : false}
                                    </div>
                                </div>
                                <div>
                                    <input type="text" id='linea1' onChange={addressChange} name='linea1' defaultValue={addressUser?.shipping_address?.address1} placeholder='Dirección (línea 1)' />
                                    {alertDireccion1 ? (<><span className='message-error'>{alertDireccion1}</span></>) : false}
                                </div>
                                <div>
                                    <input type="text" id='linea2' onChange={addressChange} name='linea2' defaultValue={addressUser?.shipping_address?.address2} placeholder='Dirección (línea 2)' />
                                    {alertDireccion2 ? (<><span className='message-error'>{alertDireccion2}</span></>) : false}
                                </div>
                                <div className='div-flex'>
                                    <div>
                                        <input type="text" id='codigo_postal' onChange={addressChange} name='codigo_postal' defaultValue={addressUser?.shipping_address?.postcode} placeholder='Código postal' />
                                        {alertCodePostal ? (<><span className='message-error'>{alertCodePostal}</span></>) : false}
                                    </div>
                                    <div>
                                        <input type="text" id='ciudad' onChange={addressChange} name='ciudad' defaultValue={addressUser?.shipping_address?.city} placeholder='Ciudad' />
                                        {alertCiudad ? (<><span className='message-error'>{alertCiudad}</span></>) : false}
                                    </div>
                                </div>
                            </div>

                            <input type="checkbox" id="term-home" name="terms" onChange={() => { setCheck(!check) }} />
                            <label htmlFor="term-home">Estoy de acuerdo con los <span id='terminos-home'>Términos y Condiciones</span></label>
                        </div>

                        {changeAddress.nombre === undefined || changeAddress.nombre.length === 0 || changeAddress.apellido === undefined || changeAddress.apellido.length === 0 || changeAddress.pais === undefined || changeAddress.pais.length === 0 || changeAddress.linea1 === undefined || changeAddress.linea1.length === 0 || changeAddress.linea2 === undefined || changeAddress.linea2.length === 0 || changeAddress.codigo_postal === undefined || changeAddress.codigo_postal.length === 0 || changeAddress.ciudad === undefined || changeAddress.ciudad.length === 0 || check === false ?
                            (<>
                                <button id='bt-home'>Confirmar Devolución</button>
                            </>)
                            :
                            (<>
                                {!!loading ? (<><div className='spinner'></div></>) : false}
                                <button id='bt-home-active' onClick={validate}>Confirmar Devolución</button>
                            </>)
                        }

                    </>)}

            </div>


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

export default ReturnHome