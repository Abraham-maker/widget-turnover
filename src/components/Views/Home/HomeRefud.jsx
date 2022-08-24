import React from 'react'
import { useHistory } from 'react-router-dom'
import './stylesRefud/HomeRefud.css'


const HomeRefud = () => {
  const { push } = useHistory();

  return (
    <>
      <div className='container__home'>
        <div className="icon__home"><i className="fa fa-times"></i></div>
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
          <button className='btn-home'><span className='span__home' onClick={() => {push('/get-orders')}} >Iniciar devolución</span></button>

        </div>
      </div>
    </>
  )
}

export default HomeRefud