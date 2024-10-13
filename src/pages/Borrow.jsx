import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import '../assets/styles/Borrow.css';
import { useEffect, useState } from "react";
import Borrowings from "../components/Borrowings.jsx";

const Borrow = ({mode,changeMode}) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch books when the component loads
        fetchBookDetails();
    }, []);

    const fetchBookDetails = async () => {
        try {
            const URL = `http://localhost:8080/api/books`;
            const response = await fetch(URL);
            const data = await response.json();
            setBooks(data); // Set the book list in state
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <Navbar mode={mode} changeMode={changeMode}/>

            <section className="borrow-container">
                <h1>Borrow Books</h1>
                <div className="books-list">
                    {books.length > 0 ? (
                        books.map((book) => (
                            <div key={book.bookId} className="book-card">
                                <h2>{book.title}</h2>
                                <p><strong>Author:</strong> {book.author}</p>
                                <p><strong>ISBN:</strong> {book.isbn}</p>
                                <p><strong>Publisher:</strong> {book.publisher}</p>
                                <p><strong>Published Year:</strong> {book.publishedYear}</p>
                                <p><strong>Genre:</strong> {book.genre}</p>
                                <p><strong>Copies Available:</strong> {book.copiesAvailable}</p>
                                <button className={"borrow-button"} >Borrow Book</button>
                            </div>
                        ))
                    ) : (
                        <p>Loading books...</p>
                    )}
                </div>
            </section>

            <Borrowings/>

            <Footer />
        </>
    );
};

export default Borrow;
