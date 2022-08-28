import React, { useState } from 'react'
import './styles/SelectSize.css'
import { useHistory } from 'react-router-dom'


const SelectSize = ({ setOpenModal }) => {
  const { push } = useHistory()
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    window.localStorage.removeItem('InfoLogin', true)
    push('/')
    setOpenModal(false)
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
          <div id="container-img">
            <img src="https://static.lefties.com/9/photos2/2022/I/0/1/p/5912/305/657/5912305657_1_1_3.jpg?t=1659362106638" alt="" />
          </div>
          <div id="container-about">
            <div id='text-flex'>
              <span>Camisa Oversize X</span>
              <span>59,90€</span>
            </div>
            <p id='ref'>Ref. 1287654</p>
            <p id='colors'>Selecciona el color</p>
            <div id='container-colors'>
              <div id='color1'></div>
              <div id='color2'></div>
              <div id='color3'></div>
              <div id='color4'></div>
            </div>
            <p id='help-size'>Ayuda sobre tu talla</p>

            <select id='select'>
              <option selected disabled>Selecciona tu talla</option>
              <option value="1">No Wrapper</option>
              <option value="2">No JS</option>
              <option value="3">Nice!</option>
            </select>

            <div>
              <button id='next-size'><span id='next-span'>Continuar</span></button>
            </div>

          </div>
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