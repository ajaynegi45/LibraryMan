import React, { useRef } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer';
import BookList from "../components/BookList.jsx";
import img2 from "../assets/images/books.jpg"
import '../assets/styles/Contact.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

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
    <Navbar/>
      <section className='contact-wrapper'>
        <div>
          <h2 className='form-headline'>Contact Us</h2>
          <form className='form-wrapper' ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name" className="label-name">Full Name:</label>
            <input className="input" type='text' name='user_name' required/>

            <label htmlFor="user_email" className="label-name">Email:</label>
            <input className="input" type='email' name='user_email' required/>

            <label htmlFor="user_subject" className="label-name">Subject:</label>
            <input className="input" type='text' name='user_subject' required/>

            <label htmlFor="message" className="label-name">Message:</label>
            <textarea name='message' cols="30" rows="10"></textarea>

            <button className="submit-btn" type='submit'>Send Message</button>
          </form>
        </div>
          <img className="contact-img" src={img2} alt='Picture of some books'/>
      </section>
    <Footer/>
    </>
  )
}

export default Contact