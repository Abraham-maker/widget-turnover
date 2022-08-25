import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './stylesRefud/HomeRefud.css'
import BtnFaqs from '../../Layout/btn-faqs/BtnFaqs'

const HomeRefud = ({ setOpenModal }) => {
  const [open, setOpen] = useState(false);
  const { push } = useHistory();

  return (
    <>
      <div className='container__home'>

        <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>

        <div className='header__home'>
          <h1 className='title__home'>Devoluciones</h1>
        </div>
        <div className='body__home'>
          <div className='container__refud'>
            <p className='paragraph__home'>Quiero una talla/color diferente</p>
            <p className='paragraph__home-two'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          </div>
          <div className='container__refud'>
            <p className='paragraph__home'>Quiero un estilo/producto diferente</p>
            <p className='paragraph__home-two'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          </div>
          <div className='container__refud'>
            <p className='paragraph__home'>Quiero Reembolso</p>
            <p className='paragraph__home-two'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          </div>
          <button className='btn-home' onClick={() => { push('/get-orders') }}><span className='span__home' >Iniciar devolución</span></button>
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
                <button className='btn-accept' onClick={() => setOpenModal(false)}>Aceptar</button>
              </div>
            </div>
          </div>
        </>) : false}
    </>
  )
}

export default HomeRefud