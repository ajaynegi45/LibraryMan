import React, { useState, useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom';
import '../assets/styles/Navbar.css';
import Navlink from './Navlink.jsx';

const Navbar = ({mode, changeMode}) => {

  const [isNavHidden, setIsNavHidden] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [isChecked, setIsChecked] = useState(mode === 'dark');

  useEffect(() => {
    setIsChecked(mode === 'dark');
  }, [mode]);

  const handleModeChange = () => {
    changeMode();
    setIsChecked(!isChecked); 
  };

  const navbarStyle = {
    transform: isNavHidden ? 'translateY(-105%)' : 'translateY(0%)',
  };

  return (
    <>
      <nav className="navbar" style={navbarStyle}>
        <div className="logo">
          <img width="80" height="80" src="https://img.icons8.com/plasticine/100/literature.png" alt="literature" loading="lazy" decoding="async" />
          <NavLink to={`/`}>Library</NavLink>
        </div>

        <div className={click ? "menu active" : "menu"}>
          <div className={click ? "menu-links active" : "menu-links"}>
            <Navlink />
          </div>

          <Link to={"/login"}><button className="log-in">Log In</button></Link>

          <div className="flexdiv">
            <label className="switch">
              <input type="checkbox" onChange={handleModeChange} checked={isChecked} />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
