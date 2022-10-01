import React, { useState } from 'react';
import './FAQS.css'

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div id="accordion-item" >
            <div id="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div id='title-accodion'>{title}</div>
                <div>{isActive ? <i className="fa fa-minus" aria-hidden="true"></i> : <i className="fa fa-plus" aria-hidden="true"></i>}</div>
            </div>
            {isActive && <div id="accordion-content">{content}</div>}
        </div>
    );
};

export default Accordion;
