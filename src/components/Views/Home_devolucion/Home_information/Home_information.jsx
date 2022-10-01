import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../styles_home.css'
import BtnFaqs from '../../../Layout/btn-faqs/BtnFaqs'

const HomeRefud = ({ setOpenModal }) => {
  const [open, setOpen] = useState(false);
  const { push } = useHistory();

  const closeModal = () => {
    push('/')
    setOpenModal(false)
  }

  return (
    <>
      <div className="container-general">
        <div className='container_icons'>
          <div className='icon__arrow' onClick={() => { return window.history.back() }}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
          <h3 className='title__icons'>Devoluciones</h3>
          <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>
        </div>

        <div className="flex-general">
          <div>
            <div className='container__refud'>
              <p className='paragraph__home'>Cambio</p>
              <p className='paragraph__home-two'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
            <div className='container__refud'>
              <p className='paragraph__home'>Reembolso</p>
              <p className='paragraph__home-two'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
            <button className='btn-home' onClick={() => { push('/get-orders') }}><span className='span__home' >Iniciar devolución</span></button>
          </div>
        </div>
      </div>


      <BtnFaqs />
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

export default HomeRefud