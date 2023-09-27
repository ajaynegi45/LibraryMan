import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const styles = {
  color: "red", 
  fontSize: "10px",
  marginTop: "360px"

};

const About = () => {
  return (
    <>
    <Header/>

    <h1 style={styles} >This is About Page</h1>
    <h1 style={styles} >This is About Page</h1>
    <h1 style={styles} >This is About Page</h1>


    <Footer/>
    </>
  )
}

export default About