import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import {Link, useNavigate, useParams} from "react-router-dom";
import bookCover from "../assets/images/BookCoverunavailable.jpg";
import { useGlobalContext } from "../Context.jsx";
import "../assets/styles/SingleBook.css";
import loadingGIF from "../assets/gif/output-onlinegiftools.gif"

const SingleBook = ({mode,changeMode}) => {
    const { id,readLink } = useParams();
    const navigate = useNavigate();
    const [singleBook, setSingleBook] = useState({});
    const {isLoading, setIsLoading} = useGlobalContext();

    const goBack = () => { navigate(-1); }

    useEffect(() => {

        const fetchBookDetails = async () => {
            try {
                setIsLoading(true);

                const URL = `https://openlibrary.org/works/${id}.json`;
                const response = await fetch(URL);
                const data = await response.json();

                if (data) {

                    const {
                        description,
                        title,
                        covers,
                        subject_places,
                        subject_times,
                        subjects
                    } = data;

                    const newBook = {
                        description: description ? description.value : "No description found",
                        title: title,
                        coverImg: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : bookCover,
                        subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
                        subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
                        subjects: subjects ? subjects.join(", ") : "No subjects found"
                    };

                    setSingleBook(newBook);
                    setIsLoading(false)
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchBookDetails();
    }, [id]);

    return (
        <>
            <Navbar mode={mode} changeMode={changeMode}/>

            <section id="single-book-section">

                <div>
                    <button onClick={goBack}>Go Back</button>
                </div>


                {
                    isLoading ?
                        <img id="loading-singleBook-gif" src={loadingGIF} alt="Loading..." loading='lazy' decoding='async' />

                    :   <div id="single-book-container">
                            <div id="singlebook-img-container">
                                <img src={singleBook.coverImg} alt="Image is not available" loading='lazy' decoding='async' />
                            </div>
                            <div id="singlebook-details" >
                                <h1>{singleBook.title}</h1>
                                <p><b>Description:</b> {singleBook.description}</p>
                                <p><b>Subject Places:</b> {singleBook.subject_places}</p>
                                <p><b>Subject Times:</b> {singleBook.subject_times}</p>
                                <p><b>Subjects:</b> {singleBook.subjects}</p>
                                <Link id={"read-link-button"} to={`https://archive.org/details/${readLink}/2up?view=theater`}>
                                    Read
                                </Link>
                            </div>
                        </div>
            }

            </section>

            <div>

            </div>
        </>
    );
};

export default SingleBook;
