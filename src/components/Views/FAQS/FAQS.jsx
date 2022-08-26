import React, { useState } from 'react'
import Accordion from './Accordion';
import './FAQS.css'
const FAQS = ({ setOpenModal }) => {
    const [isActive, setIsActive] = useState(false);
    const [open, setOpen] = useState(false);

    const accordionData = [
        {
            title: '¿Lorem ipsum dolor sit amet?',
            content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. `
        },
        {
            title: '¿Lorem ipsum dolor sit amet?',
            content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. `
        },
        {
            title: '¿Lorem ipsum dolor sit amet?',
            content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. `
        },
    ];


    return (
        <>
            <div className='container_icons'>
                <div className='icon__arrow' onClick={() => { return window.history.back() }}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
                <div className="icon__close" onClick={() => { setOpen(true) }}><i className="fa fa-times"></i></div>
            </div>
            <div className='container-acordion'>
                <h1 className='title-refud'>Devoluciones</h1>
                <p className='paragraph-refud'>Tu devolución será gestionada por TurnOver.</p>
                <div className="accordion">
                    {accordionData.map(({ title, content }) => (
                        <Accordion title={title} content={content} />
                    ))}
                </div>

                <button className='start-refud'>Empezar devolución</button>
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
                                <button className='btn-accept' onClick={() => setOpenModal(false)}>Aceptar</button>
                            </div>
                        </div>
                    </div>
                </>) : false}
        </>
    )
}

export default FAQS