import React, { useState, useEffect,useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import Navlink from './Navlink.jsx';

const Navbar = () => {

  // Nav Scroll 
  const [isNavHidden, setIsNavHidden] = useState(false);
  let prevScrollPos = window.scrollY;

  const [click,setClick] = useState(false);
  const handleClick = () =>{
    setClick(!click);
  };

  //menu-icon




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
      <img width="80" height="80" src="https://img.icons8.com/plasticine/100/literature.png" alt="literature"/>
      <NavLink to={`/`}>Library</NavLink>
    </div>

    {/* Nav Menu */}
      <div className={click ? "menu active" : "menu"}>
        
        {/* Links */}
        <div className={click ? "menu-links active" : "menu-links"}>

          <Navlink/>

        </div>

        {/* Login Button */}
        <NavLink to={`/login`} ><button className="log-in">Log In</button></NavLink>
        
      </div>
   
    {/* Side Button */}
    { /*
      <div className="menu-btn">
      <i className="fa-solid fa-bars" onClick={showMenu}></i>
    </div>
    */
    }
    <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
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