import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import './styles/Products.css'


const Products = ({ setOpenModal }) => {
    let params = useParams();
    let { order_id } = params;
    const { push } = useHistory();
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState({});
    const [selectProduct, setSelectProduct] = useState([]);

    useEffect(() => {
        if (selectProduct.length !== 0) {
            window.localStorage.setItem("product_id", JSON.stringify(selectProduct))
            window.localStorage.setItem("order_id", JSON.stringify(order_id))
        }
    }, [selectProduct])

    const closeModal = () => {
        window.localStorage.removeItem('InfoLogin', true)
        push('/')
        setOpenModal(false)
    }

    useEffect(() => {
        const findId = async () => {
            const initialUrl = `https://www.turnover.gotopdev.com/api/v1/order-info?key=2c4c5a3b-5289-4b26-9cea-43b955bb1881&order_id=${order_id}`
            fetch(initialUrl)
                .then(response => response.json())
                .then(({ order_products }) => {
                    setProducts(order_products)
                })
        };
        findId();
    }, []);



    return (
        <>
            <div className='container_icons'>
                <div className='icon__arrow' onClick={() => { return window.history.back() }}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
                <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>
            </div>

            <div id='container-product'>
                <h3 id='title-product'>Devoluciones</h3>
                <div id='article-product'>

                    {Object.entries(products).length === 0 ? (
                        <>
                            <div id='container-loading'>
                                <div id='loading'></div>
                            </div>
                        </>
                    ) : (<>
                        {products.map((items) => {

                            return (
                                <>
                                    <div id="item-product">
                                        <div id='items'>
                                            <div id='container-checkBox'>
                                                {items.quantity_in_inventory === 0 ?
                                                    (<>
                                                        <small id='not-change'>No disponible para cambio</small>
                                                    </>) :
                                                    (<>
                                                        <input type="radio" name="my-checkbox" id={items.product_id} onChange={() => { setSelectProduct(items.product_id) }} />
                                                        <label for={items.product_id}></label>
                                                    </>)}
                                            </div>

                                            {items.images.length === 0 ?
                                                (<>
                                                    <img src="https://us.123rf.com/450wm/urfandadashov/urfandadashov1805/urfandadashov180500070/100957966-icono-de-foto-no-disponible-aislado-sobre-fondo-blanco-ilustraci%C3%B3n-vectorial.jpg?ver=6" alt="" width={200} height={180} />
                                                </>) :
                                                (<>
                                                    <img src={items.images[0]?.http_path} alt="" width={200} height={180} />
                                                </>)
                                            }

                                            <div>
                                                <p id='text-header'>{items.name} {items.model}</p>
                                                <p className='text-normal'>Ref. {items.product_id}</p>
                                                <p className='text-normal'>Talla {items.options[1]?.value}</p>
                                                <p className='text-normal'>Color {items.options[0]?.value}</p>
                                            </div>
                                            <p id='text-header'>{items.price}€</p>
                                        </div>
                                    </div>

                                </>

                            )

                        })

                        }
                    </>

                    )
                    }

                </div>
                {
                    selectProduct.length === 0 ?
                        false :
                        (<>
                            <button id="start-products" onClick={() => { return push(`/about-product/${selectProduct}`) }}>
                                <span>Iniciar Devolucion</span>
                            </button>
                        </>)
                }
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

export default Products