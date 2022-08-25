import React from 'react'
import { useHistory } from 'react-router-dom'
import './BtnFaqs.css'


const BtnFaqs = () => {
    const { push } = useHistory()
    return (
        <div className='btn-question' onClick={() => {return push('/faqs')}}>
            <i class="fa fa-question" aria-hidden="true"></i>
        </div>
    )
}

export default BtnFaqs