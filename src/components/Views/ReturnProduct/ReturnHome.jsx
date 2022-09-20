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
    const [changeAddress, setChangeAddress] = useState({})

    let order_id = JSON.parse(window.localStorage.getItem("order_id", true))
    const [check, setCheck] = useState(false)
    const [alertPais, setAlertPais] = useState("")
    const [alertNombre, setAlertNombre] = useState([])
    const [alertApellido, setAlertApellido] = useState("")
    const [alertDireccion1, setAlertDireccion1] = useState("")
    const [alertDireccion2, setAlertDireccion2] = useState("")
    const [alertCodePostal, setAlertCodePostal] = useState("")
    const [alertCiudad, setAlertCiudad] = useState("")

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
                    setChangeAddress({
                        nombre: data.customer.first_name,
                        apellido: data.customer.last_name,
                        ciudad: data.shipping_address.city,
                        linea1: data.shipping_address.address1,
                        linea2: data.shipping_address.address2,
                        codigo_postal: data.shipping_address.postcode,
                        pais: data.shipping_address.country.name,
                    })
                })
        };
        getAddress();
    }, []);


    const addressChange = ({ target }) => {
        const { name, value } = target;
        setChangeAddress({ ...changeAddress, [name]: value })
    }

    const validate = () => {
        let validado = true
        if (changeAddress.nombre === undefined || changeAddress.nombre.length === 0) {
            setAlertNombre("El nombre es requerido")
            validado = false
        } else if (changeAddress.nombre.length < 3) {
            setAlertNombre("El mínimo de caracteres debe ser 3")
            validado = false
        }

        if (changeAddress.apellido === undefined || changeAddress.apellido.length === 0) {
            setAlertApellido("El apellido es requerido")
            validado = false
        } else if (changeAddress.apellido.length < 3) {
            setAlertApellido("El mínimo de caracteres debe ser 3")
            validado = false
        }

        if (changeAddress.pais === undefined || changeAddress.pais.length === 0) {
            setAlertPais("El pais es requerido")
            validado = false
        } else if (changeAddress.pais.length < 4) {
            setAlertPais("El mínimo de caracteres debe ser 4")
            validado = false
        }

        if (changeAddress.linea1 === undefined || changeAddress.linea1.length === 0) {
            setAlertDireccion1("La direccion es requerida")
            validado = false
        } else if (changeAddress.linea1.length < 4) {
            setAlertDireccion1("El mínimo de caracteres debe ser 4")
            validado = false
        }

        if (changeAddress.codigo_postal === undefined || changeAddress.codigo_postal.length === 0) {
            setAlertCodePostal("El codigo postal es requerido")
            validado = false
        } else if (changeAddress.codigo_postal.length < 4) {
            setAlertCodePostal("El mínimo de caracteres debe ser 4")
            validado = false
        }

        if (changeAddress.ciudad === undefined || changeAddress.ciudad.length === 0) {
            setAlertCiudad("La ciudad es requerida")
            validado = false
        } else if (changeAddress.ciudad.length < 4) {
            setAlertCiudad("El mínimo de caracteres debe ser 4")
            validado = false
        }


        if (validado === true) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                window.localStorage.setItem("address", JSON.stringify(changeAddress))
                push('/view-refud-success')
            }, 1000);
        }

        setTimeout(() => {
            setAlertCiudad("");
            setAlertCodePostal("");
            setAlertDireccion2("");
            setAlertDireccion1("");
            setAlertPais("");
            setAlertApellido("");
            setAlertNombre("");
        }, 8000);
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

                                    <div className='container-radio'>
                                        <label htmlFor="test" className='label-radio'>
                                            <input type="radio" id="test1" name="radio-group" checked />
                                            <span>Devolver tu producto en Domicilio</span>
                                        </label>
                                        <span id='span-free__home'>Gratuito</span>
                                    </div>
                                    <div>
                                        <p className='home-date' >Estimada hasta al jueves 10 Mar. - martes 15 mar.</p>
                                        <p className='home-info'>+ info</p>
                                    </div>
                                </div>
                            </div>

                            <p>Facturación</p>

                            <div id="div-inputs">
                                <div>
                                    <input type="text" maxLength={20} id='direccion' onChange={addressChange} name='pais' defaultValue={addressUser?.shipping_address?.country?.name} placeholder='País' />
                                    {alertPais ? (<><span className='message-error'>{alertPais}</span></>) : false}
                                </div>
                                <div className='div-flex'>
                                    <div>
                                        <input type="text" maxLength={20} id='nombre' onChange={addressChange} name='nombre' defaultValue={addressUser?.customer?.first_name} placeholder='Nombre' />
                                        {alertNombre ? (<><span className='message-error'>{alertNombre}</span></>) : false}
                                    </div>
                                    <div>
                                        <input type="text" id='apellido' maxLength={20} onChange={addressChange} name='apellido' defaultValue={addressUser?.customer?.last_name} placeholder='Apellido' />
                                        {alertApellido ? (<><span className='message-error'>{alertApellido}</span></>) : false}
                                    </div>
                                </div>
                                <div>
                                    <input type="text" id='linea1' maxLength={50} onChange={addressChange} name='linea1' defaultValue={addressUser?.shipping_address?.address1} placeholder='Dirección (línea 1)' />
                                    {alertDireccion1 ? (<><span className='message-error'>{alertDireccion1}</span></>) : false}
                                </div>
                                <div>
                                    <input type="text" id='linea2' maxLength={50} onChange={addressChange} name='linea2' defaultValue={addressUser?.shipping_address?.address2} placeholder='Dirección (línea 2)' />
                                    {alertDireccion2 ? (<><span className='message-error'>{alertDireccion2}</span></>) : false}
                                </div>
                                <div className='div-flex'>
                                    <div>
                                        <input type="text" maxLength={20} id='codigo_postal' onChange={addressChange} name='codigo_postal' defaultValue={addressUser?.shipping_address?.postcode} placeholder='Código postal' />
                                        {alertCodePostal ? (<><span className='message-error'>{alertCodePostal}</span></>) : false}
                                    </div>
                                    <div>
                                        <input type="text" maxLength={20} id='ciudad' onChange={addressChange} name='ciudad' defaultValue={addressUser?.shipping_address?.city} placeholder='Ciudad' />
                                        {alertCiudad ? (<><span className='message-error'>{alertCiudad}</span></>) : false}
                                    </div>
                                </div>
                            </div>

                            <input type="checkbox" id="term-home" name="terms" onChange={() => { setCheck(!check) }} />
                            <label htmlFor="term-home">Estoy de acuerdo con los <span id='terminos-home'>Términos y Condiciones</span></label>
                        </div>

                        {changeAddress.nombre === undefined || changeAddress.nombre.length === 0 || changeAddress.apellido === undefined || changeAddress.apellido.length === 0 || changeAddress.pais === undefined || changeAddress.pais.length === 0 || changeAddress.linea1 === undefined || changeAddress.linea1.length === 0 || changeAddress.codigo_postal === undefined || changeAddress.codigo_postal.length === 0 || changeAddress.ciudad === undefined || changeAddress.ciudad.length === 0 || check === false ?
                            (<>
                                <button id='bt-home'>Confirmar devolución</button>
                            </>)
                            :
                            (<>
                                <button id='bt-home-active' onClick={validate}>Confirmar devolución</button>
                                {!!loading ? (<><div className='spinner'></div></>) : false}
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