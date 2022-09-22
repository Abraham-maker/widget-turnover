import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './questionnaire.css'

const Questionnaire = ({ setOpenModal }) => {
  const { push } = useHistory()
  const [cuestionnaire, setCuestionnaire] = useState({})
  const [open, setOpen] = useState(false);
  const [finish, setFinish] = useState(false);
  const closeModal = () => {
    window.localStorage.removeItem('InfoLogin', true)
    push('/')
    setOpenModal(false)
  }

  const cuestionnaireChange = ({ target }) => {
    const { name, value } = target;
    setCuestionnaire({ ...cuestionnaire, [name]: value })
  }

  return (
    <>

      <div className='container_icons'>
        <div className='icon__arrow' onClick={() => { return window.history.back() }}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
        <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>
      </div>

      <h3 id='title-question'>Devoluciones</h3>

      <div id="container-cuestionario">
        <div id="article-cuestionario">
          <span id='title-turnover'>Cuestionario de satisfacción TurnOver.</span>
          <p id='paragraph-turnover'>Antes de terminar tu devolución, valora del 1 al 10 cada uno de los siguientes puntos sobre la devolución efectuada con TurnOver. siendo 1 nada satisfecho y 10 muy satisfecho.</p>

          <div id='container-checkboxs'>
            <div id="container-check1">
              <p className='text-centers'>¿Te ha gustado realizar la devolución con TurnOver?</p>
              <div id="check-1">

                <div>
                  <label htmlFor="value1" className='label-radio' >
                    <input type="radio" name="agusto_refud" value='1' id="value1" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>

                  <p className='text-center'>1</p>
                </div>

                <div>
                  <label htmlFor="value2" className='label-radio' >
                    <input type="radio" name="agusto_refud" value='2' id="value2" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>2</p>
                </div>

                <div>
                  <label htmlFor="value3" className='label-radio' >
                    <input type="radio" name="agusto_refud" value='3' id="value3" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>3</p>
                </div>

                <div>
                  <label htmlFor="value4" className='label-radio' >
                    <input type="radio" name="agusto_refud" value='4' id="value4" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>4</p>
                </div>

                <div>
                  <label htmlFor="value5" className='label-radio' >
                    <input type="radio" name="agusto_refud" value='5' id="value5" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>5</p>
                </div>

                <div>
                  <label htmlFor="value6" className='label-radio' >
                    <input type="radio" name="agusto_refud" value='6' id="value6" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>6</p>
                </div>

                <div>
                  <label htmlFor="value7" className='label-radio'>
                    <input type="radio" name="agusto_refud" value='7' id="value7" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>7</p>
                </div>

                <div>
                  <label htmlFor="value8" className='label-radio'>
                    <input type="radio" name="agusto_refud" value='8' id="value8" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>8</p>
                </div>

                <div>
                  <label htmlFor="value9" className='label-radio'>
                    <input type="radio" name="agusto_refud" value='9' id="value9" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>9</p>
                </div>

                <div>
                  <label htmlFor="value10" className='label-radio'>
                    <input type="radio" name="agusto_refud" value='10' id="value10" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>10</p>
                </div>

              </div>
            </div>

            <div id="container-check2">
              <p className='text-centers'>¿Se ha solucionado debidamente tu problema?</p>
              <div id="check-2">
                <div>
                  <label htmlFor="value11" className='label-radio'>
                    <input type="radio" name="solution_refud" value='1' id="value11" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>1</p>
                </div>

                <div>
                  <label htmlFor="value12" className='label-radio'>
                    <input type="radio" name="solution_refud" value='2' id="value12" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>2</p>
                </div>

                <div>
                  <label htmlFor="value13" className='label-radio'>
                    <input type="radio" name="solution_refud" value='3' id="value13" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>3</p>
                </div>

                <div>
                  <label htmlFor="value14" className='label-radio'>
                    <input type="radio" name="solution_refud" value='4' id="value14" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>4</p>
                </div>

                <div>
                  <label htmlFor="value15" className='label-radio'>
                    <input type="radio" name="solution_refud" value='5' id="value15" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>5</p>
                </div>

                <div>
                  <label htmlFor="value16" className='label-radio'>
                    <input type="radio" name="solution_refud" value='6' id="value16" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>6</p>
                </div>

                <div>
                  <label htmlFor="value16" className='label-radio'>
                    <input type="radio" name="solution_refud" value='7' id="value16" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>7</p>
                </div>

                <div>
                  <label htmlFor="value17" className='label-radio'>
                    <input type="radio" name="solution_refud" value='8' id="value17" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>8</p>
                </div>

                <div>
                  <label htmlFor="value18" className='label-radio'>
                    <input type="radio" name="solution_refud" value='9' id="value18" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>9</p>
                </div>

                <div>
                  <label htmlFor="value19" className='label-radio'>
                    <input type="radio" name="solution_refud" value='10' id="value19" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>10</p>
                </div>
              </div>
            </div>

            <div id="container-check3">
              <p className='text-centers'>¿Recomendarías TurOver a tus familiares o amigos?</p>
              <div id='check-3'>

                <div>
                  <label htmlFor="value21" className='label-radio'>
                    <input type="radio" name="recommend_refud" value='1' id="value21" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>1</p>
                </div>

                <div>
                  <label htmlFor="value22" className='label-radio'>
                    <input type="radio" name="recommend_refud" value='2' id="value22" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>2</p>
                </div>

                <div>
                  <label htmlFor="value23" className='label-radio'>
                    <input type="radio" name="recommend_refud" value='3' id="value23" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>3</p>
                </div>

                <div>
                  <label htmlFor="value24" className='label-radio'>
                    <input type="radio" name="recommend_refud" value='4' id="value24" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>4</p>
                </div>

                <div>
                  <label htmlFor="value25" className='label-radio'>
                    <input type="radio" name="recommend_refud" value='5' id="value25" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>5</p>
                </div>

                <div>
                  <label htmlFor="value26" className='label-radio'>
                    <input type="radio" name="recommend_refud" value='6' id="value26" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>6</p>
                </div>

                <div>
                  <label htmlFor="value27" className='label-radio'>
                    <input type="radio" name="recommend_refud" value='7' id="value27" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>7</p>
                </div>

                <div>
                  <label htmlFor="value28" className='label-radio'>
                    <input type="radio" name="recommend_refud" value='8' id="value28" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>8</p>
                </div>

                <div>
                  <label htmlFor="value29" className='label-radio'>
                    <input type="radio" name="recommend_refud" value='9' id="value29" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>9</p>
                </div>

                <div>
                  <label htmlFor="value30" className='label-radio'>
                    <input type="radio" name="recommend_refud" value='10' id="value30" onChange={cuestionnaireChange} />
                    <span></span>
                  </label>
                  <p className='text-center'>10</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {Object.entries(cuestionnaire).length < 3 ? (<>
          <button id='btn-question'>Enviar mi opinión</button>
        </>) : (<>
          <button id='btn-question-active' onClick={() => { setFinish(true) }}>Enviar mi opinión</button>
        </>)}
      </div>


      {!!finish ? (
        <div id="modal-finish">
          <div class="modalbox">
            <img src="https://www.turnover.gotopdev.com/assets/images/LogoAzul.png" alt="turnover" width={180} />
            <p id='title-finish'>Gracias por tu opinión y confiar en TurnOver</p>
            <button id='btn-finish' onClick={() => { push('/') }}>Volver a la tienda</button>
          </div>
        </div>) : false}


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

export default Questionnaire