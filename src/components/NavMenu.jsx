import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  return (
    <>
    <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "#0aa5ff" : "#999999",
              };
            }} to={`/`} >Home</NavLink>

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
            }} to={`/contact`} >Contact</NavLink>
    </>
  )
}

export default NavMenu