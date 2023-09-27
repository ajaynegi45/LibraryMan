import React from 'react';
import '../styles/HomeSearch.css';
import blue from '../assets/blue.svg';
import { NavLink } from 'react-router-dom';



import book from '../assets/reading-books.svg';
import BookLover from '../assets/BookLover.svg';
import Education from '../assets/Education.svg';
import Reading from '../assets/reading.svg';
import Notebook from '../assets/Notebook.svg';
import Book from '../assets/Book.svg';
import skin from '../assets/skin.svg';



const HomeSearch = () => {
  return (
    <>
    <div className="home-search">

      <div className="left-side">
        <h1>Your Gateway to a Universe of Books</h1>
        <p>Explore a vast collection of books</p>

        <div className="search-div" >
          <NavLink to={`/books`} className="search-btn">Search Book</NavLink> 
        </div>

      </div>

      <div className="right-side">
        <img src={blue} alt="" />
      </div>

    </div>
    </>
  );
};

export default HomeSearch;
