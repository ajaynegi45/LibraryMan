import { useRef } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer';
import img2 from "../assets/images/books.jpg"
import '../assets/styles/Contact.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = ({mode,changeMode}) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    console.log(import.meta.env.VITE_EMAIL_SERVICE_ID, `${import.meta.env.REACT_APP_EMAIL_TEMPLATE_ID}`, form.current, `${import.meta.env.REACT_APP_EMAIL_PUBLIC_KEY}`);
    emailjs.sendForm(`${import.meta.env.VITE_EMAIL_SERVICE_ID}`, `${import.meta.env.VITE_EMAIL_TEMPLATE_ID}`, form.current, `${import.meta.env.VITE_EMAIL_PUBLIC_KEY}`)
      .then((result) => {
          toast.success("Message sent");
          console.log(result);
      }, (error) => {
          toast.error("Message could not be sent");
          console.log(error.text);
      });

    e.target.reset();
  }

  return (
    <>
    <ToastContainer />
    <Navbar mode={mode} changeMode={changeMode}/>
      <div className='contact-wrapper'>
        <div className='contact-card'>
        <div className='form'>
          <h2 className='form-headline'>Contact Us</h2>
          <form className='form-wrapper' ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name" className="label">Full Name:</label>
            <input id="user_name" className="input" type='text' name='user_name' placeholder='Full Name' required/>

            <label htmlFor="user_email" className="label">Email:</label>
            <input id="user_email" className="input" type='email' name='user_email' placeholder='Email' required/>

            <label htmlFor="user_subject" className="label">Subject:</label>
            <input id="user_subject" className="input" type='text' name='user_subject' placeholder='Subject' required/>

            <label htmlFor="message" className="label">Message:</label>
            <textarea id="message" name='message' cols="30" rows="10" placeholder='Currently this service is not working...'></textarea>

            <button className="submit-btn" type='submit'>Send Message</button>
          </form>
        </div>
          <img className="contact-img" src={img2} alt='Picture of some books' loading='lazy' decoding='async'/>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default Contact