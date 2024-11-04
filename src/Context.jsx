import React, { useCallback, useContext, useEffect, useState } from "react";
import { getBooks, getShlok } from "./services/apiServices"; // Import your backend API functions

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("java");
    const [searchResult, setSearchResult] = useState("java");

    const [verse, setVerse] = useState(null);
    const [chapter, setChapter] = useState();
    const [slok, setSlok] = useState();
    const slokcount = [47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78];

    useEffect(() => {
        const gitaChapter = Math.floor(Math.random() * 17) + 1;
        const gitaSlok = Math.floor(Math.random() * slokcount[gitaChapter - 1]) + 1;

        setChapter(gitaChapter);
        setSlok(gitaSlok);
        
        // Fetch verse from backend
        async function fetchVerse() {
            try {
                const data = await getShlok(gitaChapter, gitaSlok);
                setVerse(data);
            } catch (error) {
                setError({
                    message: "An error occurred while fetching Shlok data.",
                    statusCode: 500,
                    type: "Backend Error"
                });
            }
        }
        fetchVerse();
    }, []);

    // Fetch books data from backend
    const fetchData = useCallback(
        async () => {
            setIsLoading(true);
            try {
                const data = await getBooks(searchQuery);
                if (data && data.docs && data.docs.length > 0) {
                    setSearchResult(`Result for ${searchQuery} is Found`);
                    
                    const newBooks = data.docs.map((bookSingle) => {
                        return {
                            id: bookSingle.key,
                            author: bookSingle.author_name || [],
                            cover_id: bookSingle.cover_i,
                            title: bookSingle.title,
                            language: bookSingle.language || [],
                            pages: bookSingle.number_of_pages_median,
                            read_link: bookSingle.ia || [],
                        };
                    });
                    setBooks(newBooks);
                } else {
                    setSearchResult(`Result for ${searchQuery} is not Found`);
                    setBooks([]); // Clear books if no results
                }
            } catch (error) {
                setError({
                    message: "An error occurred while fetching Book data.",
                    statusCode: 500,
                    type: "Backend Error"
                });
            } finally {
                setIsLoading(false);
            }
        }, [searchQuery]
    );

    useEffect(() => {
        fetchData();
        setIsLoading(true);
    }, [searchQuery]);

    return (
        <AppContext.Provider value={{
            chapter,
            slok,
            isLoading,
            setIsLoading,
            error,
            books,
            setSearchQuery,
            searchResult,
            setSearchResult,
            searchQuery,
            verse
        }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook for accessing the AppContext
const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
