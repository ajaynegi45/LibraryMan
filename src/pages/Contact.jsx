import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookList from "../components/BookList.jsx";


const styles = {
  color: "red", 
  fontSize: "10px",
  marginTop: "360px"
};

const Contact = () => {
  return (
    <>
    <Header/>

      <BookList/>

    <h1 style={styles} >This is Contact Page</h1>
    <h1 style={styles} >This is Contact Page</h1>
    <h1 style={styles} >This is Contact Page</h1>


    <Footer/>
    </>
  )
}

export default Contact