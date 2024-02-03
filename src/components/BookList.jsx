import React, {useEffect} from 'react';
import {useGlobalContext} from "../Context.jsx";
import '../assets/styles/BookList.css';
import {Link} from "react-router-dom";
import loadingGIF from "/loading.gif"
import bookCover from "../assets/images/BookCoverunavailable.jpg"

const BookList = () => {

    const {books, searchResult, isLoading} = useGlobalContext();

    useEffect(()=>{
    },[isLoading])

    return (
        <>
            <p className={"booklist-status"}> {isLoading ? `Fetching Data for ${searchResult}...`:`${searchResult}`}</p>

            <div className={"bookList-container"}>
                { isLoading ? ( <div id="loading-wrapper"> <img id="loading-gif" src={loadingGIF} alt="Loading Gif" /> </div> ):
                    books.map((currentBook) => {
                        return (
                            <section className={"book-card"} key={currentBook.id}>

                                <div className={"book-card-img-container"}>
                                    <img
                                        src={
                                            currentBook.cover_id
                                                ? `https://covers.openlibrary.org/b/id/${currentBook.cover_id}-M.jpg`
                                                : bookCover
                                        }
                                        alt={'Image is not Available'} loading='lazy' decoding='async' />
                                </div>

                                <div className={"book-card-information"}>
                                    <h2 ><b>{currentBook.title}</b></h2>

                                    <p>Author:
                                        <span> {currentBook.author ? currentBook.author.join(", ") : "N/A"}</span>
                                    </p>
                                    <p>Language:
                                        <span> {currentBook.language ? currentBook.language.join(", ") : "N/A"}</span>
                                    </p>

                                    <p>Pages:
                                        <span> {currentBook.pages}</span>
                                    </p>

                                    <Link className={"read-link"}
                                          to= { currentBook.read_link && currentBook.read_link.length > 0 ?
                                              `/book/${currentBook.id.replace("/works/", "")}/${currentBook.read_link[0]}`
                                              :  "#"
                                    }>
                                        Read
                                    </Link>

                                </div>
                            </section>
                        )
                    })
                }
            </div>
        </>
    );
};

export default BookList;
