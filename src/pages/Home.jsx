import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer';
import Money from '../assets/images/Money.jpg';
import OOPS from "../assets/images/OOPS.png";
import Spring from  "../assets/images/Spring.png";
import Refactor from "../assets/images/Refactor.png";
import Programmer from "../assets/images/Programmer.png";
import HomeSearch from '../components/HomeSearch';
import '../assets/styles/Home.css';

import Hero from "../components/Hero.jsx";
import Gitashlok from "../components/Gitashlok.jsx";


const Home = () => {

  return (
    <>
    <Navbar/>
    <HomeSearch/>

    {/* Vidya Dadati Vinayam (Knowledge gives humility) - Chapter 4, Verse 39
        Na Hi Jnanena Sadrisham (There is nothing equal to knowledge.) Chapter: 4 Verse: 39
    */}

    <hr className='home-hr'/>

    <div className='div-featured'>
      <h1>Featured Books</h1>
    </div>

    <div className='card-container'>

      <div className="card">
        <div className="img-box">
          <img src={Money} alt="" />
        </div>
        <div className="text-box">
          <h2>The Psychology of Money</h2>
          <span>Morgan Housel</span>
        </div>
      </div>


      <div className="card">
        <div className="img-box">
          <img src={OOPS} alt="" />
        </div>
        <div className="text-box">
          <h2>Object Oriented</h2>
          <span>Matt Weisfeld</span>
        </div>
      </div>


      <div className="card">
        <div className="img-box">
          <img src={Spring} alt="" />
        </div>
        <div className="text-box">
          <h2>Spring In Action</h2>
          <span>Manning</span>
        </div>
      </div>


      <div className="card">
        <div className="img-box">
          <img src={Programmer} alt="" />
        </div>
        <div className="text-box">
          <h2>The Pragmatic Programmer</h2>
          <span>Person</span>
        </div>
      </div>


      <div className="card">
        <div className="img-box">
          <img src={Refactor} alt="" />
        </div>
        <div className="text-box">
          <h2>Refactoring</h2>
          <span>Kent Beck</span>
        </div>
      </div>

    </div>

    <div>
      <Hero/>
      <Gitashlok/>
    </div>

    <Footer/>
    </>
  )
}

export default Home