import React, { useState } from 'react'
import './styles/SelectSize.css'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useContext } from 'react'
import { WebContext } from '../../../config/Context/Context'

const SelectSize = ({ setOpenModal }) => {
  const { loading, setLoading } = useContext(WebContext);
  let params = useParams();
  let { product_id } = params;
  const { push } = useHistory()
  const [open, setOpen] = useState(false);
  const [aboutProduct, setAboutProduct] = useState({})
  const { product_options } = aboutProduct;
  const [selectColor, setSelectColor] = useState({
    color: [],
    price: []
  })
  const [selectOptions, setSelectOptions] = useState({
    talla: [],
    price: []
  })
  const [seleckCheck, setSelectCheck] = useState({
    checkbox: [],
    price: []
  })

  const radios = (product_options ?? [])[0]
  const checkBox = (product_options ?? [])[1];
  const color = (product_options ?? [])[3]

  let sumall = seleckCheck.price.reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);
  sumall += parseInt(selectOptions.price.title);
  let suma = parseInt(selectColor.price.value)
  suma += sumall;

  const closeModal = () => {
    window.localStorage.removeItem('InfoLogin', true)
    push('/')
    setOpenModal(false)
  }

  useEffect(() => {
    const findIdProduct = async () => {
      const initialUrl = `https://www.turnover.gotopdev.com/api/v1/product-info?key=2c4c5a3b-5289-4b26-9cea-43b955bb1881&product_id=${product_id}`
      fetch(initialUrl)
        .then(response => response.json())
        .then(({ data }) => {
          setAboutProduct(data)
        })
    };
    findIdProduct();
  }, []);

  const nextOption = () => {
    setLoading(true)
    window.localStorage.setItem('dates', JSON.stringify(aboutProduct))
    window.localStorage.setItem("product_radio", JSON.stringify(selectOptions))
    window.localStorage.setItem("product_check", JSON.stringify(seleckCheck))
    window.localStorage.setItem("product_color", JSON.stringify(selectColor))
    window.localStorage.setItem("precio_total", JSON.stringify(suma))
    setTimeout(() => {
      setLoading(false)
      return push(`/reason-refud/${product_id}`)
    }, 1000);
  }

  const colorChange = ({ target }) => {
    const { name, value } = target;
    setSelectColor({
      color: { [name]: value },
      price: { value }
    })
  }

  const optionsChange = ({ target }) => {
    const { name, value, title } = target;
    setSelectOptions({
      talla: { [name]: value },
      price: { title }
    })
  }

  const checkChange = ({ target }) => {
    const { value, checked, title } = target;
    const { checkbox, price } = seleckCheck;
    if (checked) {
      setSelectCheck({
        checkbox: [...checkbox, value],
        price: [...price, title]
      });
    } else {
      setSelectCheck({
        checkbox: checkbox.filter((e) => e !== value),
        price: price.filter((e) => e !== title)
      });
    }
  }

  return (
    <>
      <div className='container_icons'>
        <div className='icon__arrow' onClick={() => { return window.history.back() }}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
        <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>
      </div>

      <h3 id='title-size'>Devoluciones</h3>

      <div id="container-size">
        <div id="article-container">

          {Object.entries(aboutProduct).length === 0 ?
            (<>
              <div className='spinner'></div>
            </>) :
            (<>
              <div id="container-img">
                <img src={aboutProduct.images[0].http_path} alt="" />
              </div>
              <div id="container-about">
                <div id='text-flex'>
                  <span>{aboutProduct.name} {aboutProduct.u_model}</span>
                  <div>
                    <span>{aboutProduct.price}€</span>
                    <div id='more-price'>{!suma ? (<>+0€</>) : (<>+{suma}€</>)}</div>
                  </div>
                </div>
                <p id='ref'>Ref. {aboutProduct.id}</p>
                {product_options.length === 0 ? false :
                  (
                    <>
                      <p id='colors'>Selecciona el color</p>

                      <select id='select' onChange={colorChange} name='color'>
                        <option selected disabled>Selecciona tu color</option>

                        {color.option_items.map((colors) => {
                          return (
                            <>
                              <option title={colors.price} value={colors.price}>{colors.name} (+${colors.price})</option>
                            </>
                          )
                        })}
                      </select>


                      <div id="container-options">

                        <div id="container-radio">
                          <span id='text-size'>Selecciona tu talla</span>

                          {radios.option_items.map((radio) => {
                            return (
                              <>
                                <input type="radio" id={radio.id} title={radio.price} name="talla" value={radio.name} onChange={optionsChange} />
                                <label for={radio.id}>{radio.name} (+${radio.price})</label>
                              </>
                            )
                          })}
                        </div>

                        <div id="container-check">
                          <span id='text-size'> Checkbox</span>

                          {checkBox.option_items.map((checkBoxes) => {
                            return (
                              <>
                                <input type='checkbox' title={checkBoxes.price} id={checkBoxes.id} name={checkBoxes.name} value={checkBoxes.name} onChange={checkChange} />
                                <label for={checkBoxes.id}>{checkBoxes.name} (+${checkBoxes.price})</label>
                              </>
                            )
                          })}
                        </div>

                      </div>
                    </>
                  )}


                {
                  product_options.length === 0 ? (<div className='btn-product__center'>
                    <button id='next-size-active' onClick={nextOption}><span id='next-span-active'>Continuar</span></button>
                  </div>) :
                    (<>
                      {seleckCheck.checkbox.length === 0 || selectOptions.talla.length === 0 || selectColor.color.length === 0 ?
                        (<div className='btn-product__center'>
                          <button id='next-size'><span id='next-span'>Continuar</span></button>
                          {!!loading ? (<><div className='spinner'></div></>) : false}
                        </div>) :
                        (<div className='btn-product__center'>
                          <button id='next-size-active' onClick={nextOption}><span id='next-span-active'>Continuar</span></button>
                          {!!loading ? (<><div className='spinner'></div></>) : false}
                        </div>)
                      }
                    </>)
                }

              </div>
            </>)}

        </div>
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

export default SelectSize