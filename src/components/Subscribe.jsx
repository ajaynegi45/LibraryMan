import React from 'react'
import '../assets/styles/Subscribe.css';
import { BookmarkX } from 'lucide-react';
import Confirmation from '../assets/images/confirmation.png';

const Subscribe = ({onClose}) => {
    return (
        <div className='newsletter'>
            <div className='newsletter-message'>
                <button onClick={onClose} className='newsletter-close'><BookmarkX size={40} /></button>
                <img src={Confirmation} alt='' />
                <h2>Thank you for subscribing to our newsletter!</h2>
                <h4>You’ll receive the latest updates and insights in your inbox soon.</h4>

            </div>
        </div>
    )
}

export default Subscribe
