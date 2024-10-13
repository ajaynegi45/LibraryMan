import React from "react";
import Navbar from "../components/Navbar";
import "../assets/styles/PageNotFound.css";

function PageNotFound({mode,changeMode}) {
  return (
    <main>
      <Navbar mode={mode} changeMode={changeMode}/>
      <div id="pagenotfound-container">
        <img
          width="100"
          height="100"
          src="https://img.icons8.com/plasticine/100/literature.png"
          alt="literature"
          loading='lazy'
          decoding='async'
        />
        <h1>Error 404 : Page Not Found</h1>
        <h3>Oops! This was not supposed to happen</h3>
        <a href="/">
          <button id="pagenotfound-btn">Go Back</button>
        </a>
      </div>
    </main>
  );
}

export default PageNotFound;
