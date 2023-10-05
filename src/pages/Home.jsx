import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import Money from "../assets/images/Money.jpg";
import HomeSearch from "../components/HomeSearch";
import "../assets/styles/Home.css";

import Hero from "../components/Hero.jsx";
import Gitashlok from "../components/Gitashlok.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <HomeSearch />

      {/* Vidya Dadati Vinayam (Knowledge gives humility) - Chapter 4, Verse 39
        Na Hi Jnanena Sadrisham (There is nothing equal to knowledge.) Chapter: 4 Verse: 39
    */}
      <hr className="home-hr" />

      <div className="div-featured">
        <h1>Featured Books</h1>
      </div>

      <div className="card-container">
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
            <img src={Money} alt="" />
          </div>

          <div className="text-box">
            <h2>The Psychology of Money</h2>
            <span>Morgan Housel</span>
          </div>
        </div>

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
            <img src={Money} alt="" />
          </div>

          <div className="text-box">
            <h2>The Psychology of Money</h2>
            <span>Morgan Housel</span>
          </div>
        </div>

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
            <img src={Money} alt="" />
          </div>

          <div className="text-box">
            <h2>The Psychology of Money</h2>
            <span>Morgan Housel</span>
          </div>
        </div>
      </div>
      <div>
        <Gitashlok />
      </div>

      <Footer />
    </>
  );
};

export default Home;

