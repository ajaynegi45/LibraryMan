import React, { useState } from 'react';
import '../assets/styles/Footer.css';
import Subscribe from './Subscribe';

const Footer = () => {

  const[email, setEmail] = useState('');
  const emailChange= (event) => {
    setEmail(event.target.value);
    setErrorMessage('');
  }
  const [showModal, setshowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = (event) => {
    event.preventDefault(); // Prevent form submission

    if (validateEmail(email)) {
      setshowModal(true); // Show modal if email is valid
    } else {
      setErrorMessage('Please enter a valid email address.');
    }
  };

  return (
    <>

      <footer className="footer">

        <div className='newsletter-container'>
          <form onSubmit={handleSubscribe}>

            <div className='newsletter-text'>
              <label htmlFor="email" >
                <p>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </label>
            </div>

            <div className="input-container">

              <input type="email" placeholder="Email" id="email" value={email} required
                onChange={
                  (e) => { emailChange(e) }
                }/>
                
              <button type='submit' className='custom-button'>Subscribe</button>

              {/* Display error message if email is invalid */}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
               {/* Show subscription modal */}
              {showModal && <Subscribe onClose={()=>setshowModal(false)}/>}
            </div>

          </form>
        </div>

        <div className="container">

          <p>&copy; { new Date().getFullYear() } </p>
          <p>Made with ❤️ by Ajay Negi</p>
        </div>

      </footer>












{/* 

      <footer className='custom-footer'>
      <div className='container custom-container'>
        <form onSubmit={handleSubscribe} className='custom-form'>
          <div className='custom-row'>
            <div className='custom-column custom-text'>
              <p>
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>

            <div className='custom-column'>
              <input
                type='text'
                id='email'
                className='custom-input'
                placeholder='Email address'
              />
            </div>

            <div className='custom-column'>
              <button type='submit' className='custom-button'>Subscribe</button>
            </div>
          </div>
        </form>
      </div>

      <div className='custom-footer-text'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='custom-link' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </footer> */}


    </>
  )
}
  
export default Footer

