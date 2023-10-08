import React, { useEffect, useState } from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {

  const[email, setEmail] = useState();
  const emailChange= (event) => {
    setEmail(event.target.value);
  }

  return (
    <>

      <footer className="footer">

        <div className='newsletter-container'>
          <form >

            <div className='newsletter-text'>
              <label htmlFor="email" >
                <p>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </label>
            </div>

            <div className="input-container">

              <input type="email" className='email-input' placeholder="Email" id="email" required
                onChange={
                  (e) => { emailChange(e) }
                }/>
                
              <button type='submit' className='custom-button'>Subscribe</button>
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

