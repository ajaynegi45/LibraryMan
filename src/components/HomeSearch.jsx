import React from "react";
import "../assets/styles/HomeSearch.css";
import blue from "../assets/svg/blue.svg";
import { NavLink } from "react-router-dom";

import book from "../assets/svg/reading-books.svg";
import BookLover from "../assets/svg/BookLover.svg";
import Education from "../assets/svg/Education.svg";
import Reading from "../assets/svg/reading.svg";
import Notebook from "../assets/svg/Notebook.svg";
import Book from "../assets/svg/Book.svg";
import skin from "../assets/svg/skin.svg";

const HomeSearch = () => {
  return (
    <>
      <div className="home-search">
        <div className="left-side">
          <h1>
            Your <span>Gateway</span> to a Universe of Books
          </h1>
          <p>Explore a vast collection of books</p>

          <div className="search-div">
            <NavLink to={`/books`} className="search-btn">
              Search Book
            </NavLink>
          </div>
        </div>

        <div className="right-side">
          <img src={blue} alt="hero svg" />
        </div>
      </div>
    </>
  );
};

export default HomeSearch;
