import React, { useState, useEffect,useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import NavMenu from './NavMenu';

const Header = () => {


  // Nav Scroll 
  const [isNavHidden, setIsNavHidden] = useState(false);
  let prevScrollPos = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      let currScrollPos = window.scrollY;
      if (currScrollPos > prevScrollPos) {
        setIsNavHidden(true);
      } else {
        setIsNavHidden(false);
      }
      prevScrollPos = currScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  const navbarStyle = {
    transform: isNavHidden ? 'translateY(-105%)' : 'translateY(0%)',
  };



  // Nav Dialog Box
  const [showDialogBox, setShowDialogBox] = useState(false);
  const dialogBoxRef = useRef();

  const closeMenu = () => {
    console.log("Dialog Closed");
    dialogBoxRef.current.close();
    setShowDialogBox(false);
  };
  const showMenu = () => {
      console.log("Dialog Opened");
      dialogBoxRef.current.showModal();
      setShowDialogBox(true);
  };

  return (
    <>
    <nav className="navbar" style={navbarStyle} >
    
    {/* Title */}
    <div className="logo">
      <img width="100" height="100" src="https://img.icons8.com/plasticine/100/literature.png" alt="literature"/>
      <NavLink to={`/`}>Library</NavLink>
    </div>

    {/* Nav Menu */}
      <div className="menu">
        
        {/* Links */}
        <div className="menu-links">

          <NavMenu/>

{/*           
          <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "#0aa5ff" : "#999999",
              };
            }} to={`/`} >Home </NavLink>

          <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "#0aa5ff" : "#999999",
                };
              }} to={`/books`} >Books</NavLink>

          <NavLink style={ ({ isActive }) => {
              return {
                color: isActive ? "#0aa5ff" : "#999999",
              };
            }} to={`/about`}  >About</NavLink>

          <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "#0aa5ff" : "#999999",
              };
            }} to={`/contact`} >Contact</NavLink> */}
        </div>

        {/* Login Button */}
        <button className="log-in">Log In</button>
      </div>
   
    {/* Side Button */}
      <div className="menu-btn">
        <i className="fa-solid fa-bars" onClick={showMenu}></i>
      </div>
    </nav>


    <div className='dialogBox'>
      <dialog ref={dialogBoxRef}  >
        
        <button onClick={closeMenu} className="close-button">
           &times;  
        </button>

        <div className='dialog-menu'>
          <NavMenu/>
        </div>

      </dialog>
    </div>
    </>
  )
}

export default Header