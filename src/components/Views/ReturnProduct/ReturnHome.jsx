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

    const closeModal = () => {
        window.localStorage.removeItem('InfoLogin', true)
        push('/')
        setOpenModal(false)
    }
    console.log("changeAddress", changeAddress);
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

    const getCode = () => {
        setLoading(true)
        window.localStorage.setItem("address", JSON.stringify(changeAddress))
        setTimeout(() => {
            setLoading(false);
            push('/view-refud-success')
        }, 2000);
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
                                <input type="text" id='direccion' onChange={addressChange} name='direccion' defaultValue={addressUser?.shipping_address?.country?.name} placeholder='Ciudad' />
                                <div className='div-flex'>
                                    <input type="text" id='nombre' onChange={addressChange} name='nombre' defaultValue={addressUser?.customer?.first_name} placeholder='Nombre' />
                                    <input type="text" id='apellido' onChange={addressChange} name='apellido' defaultValue={addressUser?.customer?.last_name} placeholder='Apellido' />
                                </div>
                                <input type="text" id='linea1' onChange={addressChange} name='linea1' defaultValue={addressUser?.shipping_address?.address1} placeholder='Dirección (línea 1)' />
                                <input type="text" id='linea2' onChange={addressChange} name='linea2' defaultValue={addressUser?.shipping_address?.address2} placeholder='Dirección (línea 2)' />
                                <div className='div-flex'>
                                    <input type="text" id='codigo_postal' onChange={addressChange} name='codigo_postal' defaultValue={addressUser?.shipping_address?.postcode} placeholder='Código Postal' />
                                    <input type="text" id='ciudad' onChange={addressChange} name='ciudad' defaultValue={addressUser?.shipping_address?.city} placeholder='Ciudad' />
                                </div>
                            </div>

                            <input type="checkbox" id="term-home" name="terms" onChange={() => { setCheck(!check) }} />
                            <label htmlFor="term-home">Estoy de acuerdo con los <span id='terminos-home'>Términos y Condiciones</span></label>
                        </div>

                        {!!check ?
                            (<>
                                <button id='bt-home-active' onClick={getCode}>Confirmar Devolución</button>
                                {!!loading ? (<><div className='spinner'></div></>) : false}
                            </>) :
                            (<>
                                <button id='bt-home'>Confirmar Devolución</button>
                            </>)}
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