import React from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { WebContext } from '../../../config/Context/Context'
import './BtnFaqs.css'


const BtnFaqs = () => {
    const { push } = useHistory()
    const { setRegister } = useContext(WebContext);

    const changePages = () => {
        setRegister({})
        return push('/faqs')
    }

    return (
        <div className='btn-question' onClick={changePages}>
            <i className="fa fa-question" aria-hidden="true"></i>
        </div>
    )
}

export default BtnFaqs