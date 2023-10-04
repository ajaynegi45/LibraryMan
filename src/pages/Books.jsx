import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer';
import LibraryBook from '../assets/images/LibraryImage.jpeg';
import '../assets/styles/Books.css';
import BookList from "../components/BookList.jsx";
import {useGlobalContext} from "../Context.jsx";

const Books = () => {

    const {setSearchQuery, setSearchResult, setIsLoading, searchQuery} = useGlobalContext();
    const [search,setSearch] = useState("");
    const setSearchValue = (event)=> {
        setSearch(event.target.value);
    }

    const setSearchQueryValue = (e) => {
        e.preventDefault();

        // Trim the search input and remove special characters
        const trimmedSearch = search.trim().replace(/[^\w\s]/gi, '');

        if (trimmedSearch.length === 0) {
            // Handle case where the input is only spaces, dots, or special characters
            setSearchResult('Please enter a valid search query.');
        } else if (searchQuery !== trimmedSearch) {
            setSearchResult(trimmedSearch);
            setSearchQuery(trimmedSearch);
            setIsLoading(true);
        } else {
            setSearchResult(`Result for ${trimmedSearch} is already present`);
        }
    };

  return (
    <>
      <Navbar/>

        <form onSubmit={setSearchQueryValue}>
            <div className="searchBook-div">
                <img src={LibraryBook} alt="" />
                <input type="search" placeholder = "Search for books, authors..." name={"bookName"} autoCorrect={"on"} autoComplete={"on"}
                       onChange={ (e)=>{ setSearchValue(e)
                       }}
                />
            </div>
        </form>

        <BookList/>
      <Footer/>
    </>
  )
}

export default Books;
