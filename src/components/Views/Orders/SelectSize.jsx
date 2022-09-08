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
  const [selectOptions, setSelectOptions] = useState({})

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
    window.localStorage.setItem("info_product", JSON.stringify(selectOptions))
    setTimeout(() => {
      setLoading(false)
      return push(`/reason-refud/${product_id}`)
    }, 1000);
  }

  const optionsChange = ({ target }) => {
    const { name, value } = target;
    setSelectOptions({ ...selectOptions, [name]: value })
  }
  let a = 11;

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
                  <span>{aboutProduct.price}€</span>
                </div>
                <p id='ref'>Ref. {aboutProduct.id}</p>

                {/* <div id='container-colors'>
                  <div id='color1'></div>
                  <div id='color2'></div>
                  <div id='color3'></div>
                  <div id='color4'></div>
                </div> */}

                {product_options.length === 0 ? false :
                  (
                    <>
                      <p id='colors'>Selecciona el color</p>

                      <select id='select' onChange={optionsChange} name='color'>
                        <option selected disabled>Selecciona tu color</option>

                        <option value={product_options[3]?.option_items[0]?.name}>{product_options[3]?.option_items[0]?.name} (+${product_options[3].option_items[0].price})</option>

                        <option value={product_options[3]?.option_items[1]?.name}>{product_options[3]?.option_items[1]?.name} (+${product_options[3].option_items[1].price})</option>

                        <option value={product_options[3]?.option_items[2]?.name} >{product_options[3]?.option_items[2]?.name} (+${product_options[3].option_items[2].price})</option>

                        <option value={product_options[3]?.option_items[3]?.name} >{product_options[3]?.option_items[3]?.name} (+${product_options[3].option_items[3].price})</option>
                      </select>

                      {/* <p id='help-size'>Ayuda sobre tu talla</p> */}

                      {/* <select id='select'>
                  <option selected disabled>Selecciona tu talla</option>
                  <option value="1">{product_options[0].option_items[0].name}</option>
                  <option value="2">{product_options[0].option_items[1].name}</option>
                  <option value="3">{product_options[0].option_items[2].name}</option>
                </select> */}

                      <div id="container-options">

                        <div id="container-radio">
                          <span id='text-size'>Selecciona tu talla</span>
                          <input type="radio" id="radio1" name="talla" value={product_options[0].option_items[0].name} onChange={optionsChange} />
                          <label for="radio1">{product_options[0].option_items[0].name} (+${product_options[0].option_items[0].price})</label>

                          <input type="radio" id="radio2" name="talla" value={product_options[0].option_items[1].name} onChange={optionsChange} />
                          <label for="radio2">{product_options[0].option_items[1].name} (+${product_options[0].option_items[1].price})</label>

                          <input type="radio" id="radio3" name="talla" value={product_options[0].option_items[2].name} onChange={optionsChange} />
                          <label for="radio3">{product_options[0].option_items[2].name} (+${product_options[0].option_items[2].price})</label>
                        </div>

                        <div id="container-check">
                          <span id='text-size'> Checkbox</span>
                          <input type='checkbox' id="test" name={product_options[1].option_items[0].name} value={product_options[1].option_items[0].name} onChange={optionsChange} />
                          <label for="test">{product_options[1].option_items[0].name} (+${product_options[1].option_items[0].price})</label>

                          <input type="checkbox" id="testt" name={product_options[1].option_items[1].name} value={product_options[1].option_items[1].name} onChange={optionsChange} />
                          <label for="testt">{product_options[1].option_items[1].name} (+${product_options[1].option_items[1].price})</label>

                          <input type="checkbox" id="testtt" name={product_options[1].option_items[2].name} value={product_options[1].option_items[2].name} onChange={optionsChange} />
                          <label for="testtt">{product_options[1].option_items[2].name} (+${product_options[1].option_items[2].price})</label>

                          <input type="checkbox" id="testttt" name={product_options[1].option_items[3].name} value={product_options[1].option_items[3].name} onChange={optionsChange} />
                          <label for="testttt">{product_options[1].option_items[3].name} (+${product_options[1].option_items[3].price})</label>
                        </div>

                      </div>
                    </>
                  )}

                {loading ? (<><div className='spinner'></div></>) : false}

                {
                  product_options.length === 0 ? (<div>
                    <button id='next-size-active' onClick={nextOption}><span id='next-span-active'>Continuar</span></button>
                  </div>) :
                    (<>
                      {selectOptions.color === undefined || selectOptions.talla === undefined ?
                        (<div>
                          <button id='next-size'><span id='next-span'>Continuar</span></button>
                        </div>) :
                        (<div>
                          <button id='next-size-active' onClick={nextOption}><span id='next-span-active'>Continuar</span></button>
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