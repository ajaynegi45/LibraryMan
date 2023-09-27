import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LibraryBook from '../assets/LibraryImage.jpeg';
import '../styles/Books.css';

const Books = () => {

  const [search,setSearch] = useState("");

  const setSearchValue = (event)=>{
    setSearch(event.target.value)
  }

  useEffect(()=>{
    console.log("This is search value: " + search)
  },[search])


  return (
    
    <>
      <Header/>

      <div className="search-div">
        <img src={LibraryBook} alt="" />
        <input type="search" placeholder="Search..." onChange={(e)=>{setSearchValue(e)}}/>
      </div>

      <Footer/>
    </>

  )
}

export default Books