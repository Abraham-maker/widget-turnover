import React, { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './address_devolution.css'
import Loading from '../../../common/Loading'
import More from '../../../assets/icono-mais@2x.png'
import Pensil from '../../../assets/icon-pencil.png'

const Address_devolution = ({ setOpenModal }) => {
    let order_id = JSON.parse(window.localStorage.getItem("order_id", true))
    const { push } = useHistory()
    const [open, setOpen] = useState(false);
    const [addressUser, setAddressUser] = useState({})
    const [changeAddress, setChangeAddress] = useState({})

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

    const editAddress = () => {
        push('/return-home')
    }

    return (
        <>
            <div className='container_icons'>
                <div className='icon__arrow' onClick={() => { return window.history.back() }}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
                <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>
            </div>

            <h3 id='title-home-two'>Devoluciones</h3>

            <div id="return-home-two">
                {Object.entries(addressUser).length === 0 ?
                    (<Loading />) :
                    (<>
                        <div id="return-home__container-two">
                            <div id='container-btn-radio-two'>
                                <div>
                                    <div className='container-radio'>
                                        <label htmlFor="test" className='label-radio'>
                                            <input type="radio" id="test1" name="radio-group" checked />
                                            <span>Devolver tu producto en Domicilio</span>
                                        </label>
                                        <span id='span-free__home-two'>Gratuito</span>
                                    </div>
                                    <div>
                                        <p className='home-date' >Estimada hasta al jueves 10 Mar. - martes 15 mar.</p>
                                        <p className='home-info'>+ info</p>
                                    </div>
                                </div>
                            </div>

                            <div id="container-address">
                                <p id='text-dates'>Datos dirección</p>
                                <div id="article-address">
                                    <div id="flex-address">
                                        <p>{addressUser?.customer?.first_name} {addressUser?.customer?.last_name}</p>
                                        <img src={Pensil} alt="edit" width={25} height={25} onClick={editAddress} />
                                    </div>
                                    <span>Calle Pallars, 400</span>
                                    <span>2-2</span>
                                    <span>{addressUser?.shipping_address?.postcode} - {addressUser?.shipping_address?.country?.name}</span>
                                    <span>+34600000000</span>
                                </div>
                                <div id="more-contaner">
                                    <img src={More} alt="more" />
                                    <p id='add-address'>Añadir dirección</p>
                                </div>
                            </div>

                        </div>

                        <input type="checkbox" id="term-home" name="terms" />
                        <label htmlFor="term-home">Estoy de acuerdo con los <span id='terminos-home'>Términos y Condiciones</span></label>

                        <div>
                            <button id='bt-home-address'>Confirmar devolución</button>
                            <button id='bt-home-active-address'>Confirmar devolución</button>
                        </div>
                    </>)}
            </div>

            {
                open ?
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
                    </>) : false
            }
        </>
    )
}

export default Address_devolution