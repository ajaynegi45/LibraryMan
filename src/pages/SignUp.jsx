import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer';
import '../assets/styles/Signup.css';
const SignUp = () => {
  return (
    <>
      <Navbar />
      <div class="wrapper">
        <h2>Registration</h2>
        <form action="#">
          <div class="input-box">
            <input type="text" placeholder="Enter your name" required></input>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Enter your email" required></input>
          </div>
          <div class="input-box">
            <input type="password" placeholder="Create password" required></input>
          </div>
          <div class="input-box">
            <input type="password" placeholder="Confirm password" required></input>
          </div>
          <div class="policy">
            <input type="checkbox"></input>
            <h3>I accept all terms & condition</h3>
          </div>
          <div class="input-box button">
            <input type="Submit" value="Register Now"></input>
          </div>
          <div class="text">
            <h3>Already have an account? <a href="#">Login now</a></h3>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default SignUp