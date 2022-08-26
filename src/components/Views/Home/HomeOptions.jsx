import React, { useContext, useState } from 'react'
import { WebContext } from '../../../config/Context/Context'
import './stylesRefud/HomeRefud.css'
import { useHistory } from 'react-router-dom'


const HomeOptions = ({ setOpenModal }) => {
  const { push } = useHistory()
  const { listOrder } = useContext(WebContext);
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    window.localStorage.removeItem('InfoLogin', true)
    push('/')
    setOpenModal(false)
  }


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
            <p className='paragraph__home-two'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
            <button className='btn-home-options' onClick={listOrder}><span className='span__home' >Iniciar devolución</span></button>

          </div>
          <div className='container__refud'>
            <p className='paragraph__home'>Quiero un estilo/producto diferente</p>
            <p className='paragraph__home-two'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
            <button className='btn-home-options' onClick={listOrder}><span className='span__home' >Iniciar devolución</span></button>


          </div>
          <div className='container__refud'>
            <p className='paragraph__home'>Quiero Reembolso</p>
            <p className='paragraph__home-two'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>

            <button className='btn-home-options' onClick={listOrder}><span className='span__home' >Iniciar devolución</span></button>
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

export default HomeOptions