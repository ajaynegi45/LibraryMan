import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import {Link, useNavigate, useParams} from "react-router-dom";
import bookCover from "../assets/images/BookCoverunavailable.jpg";
import { useGlobalContext } from "../Context.jsx";
import "../assets/styles/SingleBook.css";
import loadingGIF from "../assets/gif/output-onlinegiftools.gif"
import backArrow from '../assets/images/left-chevron.png'

const SingleBook = () => {
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
            <Navbar />

            <section id="single-book-section">

                <div className="back-container">
                    <img src={backArrow} alt="Image is not available" />
                    <button onClick={goBack}>Go Back</button>
                </div>
                <div className="single-book-wrapper">

                    {
                        isLoading ?
                            <img id="loading-singleBook-gif" src={loadingGIF} alt="Loading..."/>

                        :   <div id="single-book-container">
                                <div id="singlebook-img-container">
                                    <img src={singleBook.coverImg} alt="Image is not available" />
                                </div>
                                <div id="singlebook-details" >
                                    <div id="singlebook-title">{singleBook.title}</div>
                                    <p>{singleBook.description}</p>
                                    <div id="place-and-time">
                                        <p>{singleBook.subject_places}</p>
                                        <div id="vertical-line"></div> 
                                        <p>{singleBook.subject_times}</p>
                                    </div>
                                    <p>{singleBook.subjects}</p>
                                    <Link id={"read-link-button"} target='_blank' to={`https://archive.org/details/${readLink}/2up?view=theater`}>
                                        read more...
                                    </Link>
                                </div>
                            </div>
                }
                </div>
            </section>

            <div>

            </div>
        </>
    );
};

export default SingleBook;
