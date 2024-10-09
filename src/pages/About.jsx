import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer';
import Temporary from "../components/Temporary.jsx";

const About = ({mode,changeMode}) => {
  return (
    <>
    <Navbar mode={mode} changeMode={changeMode}/>
      <Temporary mode={mode} />

    <Footer/>
    </>
  )
}

export default About