import React, { useState, useEffect,useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import Navlink from './Navlink.jsx';

const Navbar = () => {

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
        <div id="menu-links">

          <Navlink/>

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
          <Navlink/>
        </div>

      </dialog>
    </div>
    </>
  )
}

export default Navbar