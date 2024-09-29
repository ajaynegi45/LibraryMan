import { useEffect, useState } from 'react';
import '../assets/styles/Borrowings.css';

const Borrowings = () => {
    const [borrowings, setBorrowings] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null); // Add error state

    // Fetch borrowings data from API
    const fetchBorrowings = async () => {
        try {
            const URL = `http://localhost:8080/api/borrowings`;
            const response = await fetch(URL);
            if (!response.ok) throw new Error('Failed to fetch borrowings'); // Handle non-200 responses
            const data = await response.json();
            setBorrowings(data);
        } catch (error) {
            setError(error.message); // Set error message
        } finally {
            setLoading(false); // Set loading to false after fetching is done
        }
    };

    // Run the fetch on component mount
    useEffect(() => {
        fetchBorrowings();
    }, []);

    // Handle return book action
    const handleReturnBook = () => {
        console.log('Returning book for borrowingId:');
        alert("Book Returned Successfully");
    };

    // Handle pay fine action
    const handlePayFine = () => {
        console.log('Paying fine for borrowingId:');
        alert("Fine Paid Successfully");

    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <section className="borrowings-container">
                <h1>Borrowings</h1>

                <div className="borrowings-list">
                    {borrowings.length === 0 && <p>No borrowings found.</p>} {/* Handle empty array */}

                    {borrowings.map((borrowing) => (
                        <div key={borrowing?.borrowingId} className="borrowing-card">
                            <h2>{borrowing?.book?.title || 'No Title'}</h2>
                            <p><b>Author</b>: {borrowing?.book?.author || 'N/A'}</p>
                            <p><b>ISBN</b>: {borrowing?.book?.isbn || 'N/A'}</p>
                            <p><strong>Publisher:</strong> {borrowing?.book?.publisher || 'N/A'}</p>
                            <p><b>Published Year</b>: {borrowing?.book?.publishedYear || 'N/A'}</p>
                            <p><strong>Genre:</strong> {borrowing?.book?.genre || 'N/A'}</p>
                            <p><strong>Copies Available:</strong> {borrowing?.book?.copiesAvailable || 'N/A'}</p>
                            <p><b>Borrowing</b>: {borrowing?.borrowingId}</p>
                            <p><b>Borrow Date</b>: {borrowing?.borrowDate ? new Date(borrowing?.borrowDate).toLocaleDateString() : 'N/A'}</p>
                            <p><b>Due Date</b>: {borrowing?.dueDate ? new Date(borrowing?.dueDate).toLocaleDateString() : 'N/A'}</p>
                            {borrowing?.returnDate && (
                                <p><b>Return Date</b>: {new Date(borrowing?.returnDate).toLocaleDateString()}</p>
                            )}

                            {borrowing?.fine && (
                                <>
                                    <h3>Fine Details</h3>
                                    <p>Amount: {borrowing.fine.amount}</p>
                                    <p>Paid: {borrowing.fine.paid ? 'Yes' : 'No'}</p>
                                </>
                            )}

                            <h3>Member Details</h3>
                            <p><b>Member Id</b>: {borrowing?.member?.memberId || 'N/A'}</p>
                            <p><b>Member Name</b>: {borrowing?.member?.name || 'N/A'}</p>
                            <p><b>Member Email</b>: {borrowing?.member?.email || 'N/A'}</p>
                            <p><b>Member Role</b>: {borrowing?.member?.role || 'N/A'}</p>
                            <p><b>Membership Date</b>: {borrowing?.member?.membershipDate || 'N/A'}</p>

                            <div className="borrow-actions">
                                {borrowing?.fine && !borrowing?.fine?.paid && (
                                    <button className="pay-fine-button" onClick={() => handlePayFine()}>
                                        Pay Fine
                                    </button>
                                )}

                                {!borrowing?.returnDate && (
                                    <button className="return-button" onClick={() => handleReturnBook()}>
                                        Return Book
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};
export default Borrowings;
