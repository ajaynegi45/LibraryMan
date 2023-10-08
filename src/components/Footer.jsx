import React, { useEffect, useState } from "react";
import "../assets/styles/Footer.css";

const Footer = () => {
  const [email, setEmail] = useState();
  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <footer className="footer">
      
          <p className="copyright-text">© 2023 Library -@All rigth reserved</p>
          <p className="design-txt">Designed By Ajay Negi</p>

      </footer>
    </>
  );
};

export default Footer;

//previous footer
{
  /* <div className='newsletter-container'>
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
        </div> */
}
