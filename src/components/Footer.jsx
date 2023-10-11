import React, { useEffect, useState } from "react";
import "../assets/styles/Footer.css";

const Footer = () => {
  const [email, setEmail] = useState();
  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <footer>
        <div class="social">
          <p>Follow me on social media</p>
          <ul class="wrapper">
            <a href="#" target="_blank">
              <li class="icon linkedin">
                <span class="tooltip">LinkedIn</span>
                <span>
                  <i class="fab fa-linkedin"></i>
                </span>
              </li>
            </a>
            <a href="#" target="_blank">
              <li class="icon github">
                <span class="tooltip">GitHub</span>
                <span>
                  <i class="fab fa-github"></i>
                </span>
              </li>
            </a>
            <a href="#" target="_blank">
              <li class="icon facebook">
                <span class="tooltip">Facebook</span>
                <span>
                  <i class="fab fa-facebook-f"></i>
                </span>
              </li>
            </a>
            <a href="#" target="_blank">
              <li class="icon instagram">
                <span class="tooltip">Instagram</span>
                <span>
                  <i class="fab fa-instagram"></i>
                </span>
              </li>
            </a>
            <a href="#" target="_blank">
              <li class="icon twitter">
                <span class="tooltip">Twitter</span>
                <span>
                  <i class="fab fa-twitter"></i>
                </span>
              </li>
            </a>
          </ul>
        </div>
        <div class="final_text"></div>
        <p>
          Copyright &copy; All rights reserved
          <br></br>Designed by Ajax Negi, 2023
        </p>
      </footer>

      {/* <footer className="footer">

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

              <input type="email" placeholder="Email" id="email" required
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
 */}

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
  );
};

export default Footer;
