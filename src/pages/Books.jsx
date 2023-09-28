import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LibraryBook from '../assets/images/LibraryImage.jpeg';
import '../assets/styles/Books.css';
import BookList from "../components/BookList.jsx";
import {useGlobalContext} from "../Context.jsx";

const Books = () => {

    const {setSearchQuery, setSearchResult, setIsLoading} = useGlobalContext();
    const [search,setSearch] = useState("");
    const setSearchValue = (event)=> {
        setSearch(event.target.value);
    }
    const setSearchQueryValue = (e)=>{
        e.preventDefault();
        setSearchResult(search);
        setSearchQuery(search);
    }

  return (
    <>
      <Header/>

        <form onSubmit={setSearchQueryValue}>
            <div className="searchBook-div">
                <img src={LibraryBook} alt="" />
                <input type="search" placeholder = "Search for books, authors..."
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

export default Books