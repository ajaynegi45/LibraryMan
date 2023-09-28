import React, {useEffect} from 'react';
import {useGlobalContext} from "../Context.jsx";
import '../assets/styles/BookList.css';
import {Link} from "react-router-dom";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BookList = () => {

    const {books, searchResult, isLoading} = useGlobalContext();

    useEffect(()=>{
    },[isLoading])
    return (
        <>
            <p className={"booklist-status"}> {isLoading ? `Fetching Data for ${searchResult}...`:`${searchResult}`}</p>

            <div className={"bookList-container"}>
                {
                    books.map((currentBook) => {
                        return (
                            <section className={"book-card"} key={currentBook.id}>

                                <div className={"book-card-img-container"}>
                                    <img
                                        src={`https://covers.openlibrary.org/b/id/${currentBook.cover_id}-M.jpg`}
                                        alt={'Image is not Available'} />
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
                                    <Link to={`https://openlibrary.org/${currentBook.id}`}>
                                        {currentBook.available?"Book Available":"Book Not Available"}
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
