import React, { useContext, useState } from 'react'
import { WebContext } from '../../../Context/Context'
import '../styles_home.css'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import Loading from '../../../../common/Loading'

const HomeOptions = ({ setOpenModal }) => {
  const { push } = useHistory()
  const { listOrder, loading } = useContext(WebContext);
  const [open, setOpen] = useState(false);
  const [homeOptions, setHomeOptions] = useState(null);
  const [optionsRefud, setOptionRefud] = useState({});

  useEffect(() => {
    if (homeOptions !== null) {
      window.localStorage.setItem("tipo_devolucion", JSON.stringify(homeOptions))
    }
  }, [homeOptions])

  useEffect(() => {
    const placeReturn = () => {
      const url = 'https://www.turnover.gotopdev.com/api/v1/return-methods?key=2c4c5a3b-5289-4b26-9cea-43b955bb1881'
      fetch(url).then(res => res.json())
        .then(({ data }) => {
          setOptionRefud(data);
        })
    }
    placeReturn();
  }, [])


  const closeModal = () => {
    window.localStorage.removeItem('InfoLogin', true)
    push('/')
    setOpenModal(false)
  }

  const differentSize = () => {
    setHomeOptions('Quiero una talla/color diferente');
    return listOrder();
  }

  const iWantRefund = () => {
    setHomeOptions('Quiero Reembolso')
    return listOrder();
  }

  return (
    <>
      {!!loading ? (<Loading />) : false}
      <div className="container-general">

        <div className='container_icons'>
          <div className='icon__arrow' onClick={() => { return window.history.back() }}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
          <h3 className='title__icons'>Devoluciones</h3>
          <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>
        </div>

        <div className="flex-general">
          <div className='body__home'>
            {optionsRefud.has_change !== 0 ?
              (<>
                <div className='container__refud'>
                  <p className='paragraph__home'>Cambio</p>
                  <p className='paragraph__home-two'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
                  <button className='btn-home-options' onClick={differentSize}><span className='span__home' > Iniciar devolución</span></button>
                </div>
              </>) : false}
            {optionsRefud.has_refud !== 0 ?
              (<>
                <div className='container__refud'>
                  <p className='paragraph__home'>Reembolso</p>
                  <p className='paragraph__home-two'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
                  <button className='btn-home-options' onClick={iWantRefund}><span className='span__home' >Iniciar devolución</span></button>
                </div>
              </>) : false}
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