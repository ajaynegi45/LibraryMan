import React, {useCallback, useContext, useEffect, useState} from "react";
// context (warehouse)
// Provider (Delivery Boy)
// Consumer (useContext(you))

// Context (Warehouse) for managing application state
const AppContext = React.createContext();

// URL for Open Library API
const URL = "https://openlibrary.org/search.json?title=";

const AppProvider = ({children}) => {

    // State variables for managing data and UI state
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
        async function fetchData() {
            try {
                const response = await fetch(`https://bhagavadgitaapi.in/slok/${gitaChapter}/${gitaSlok}/`);
                const data = await response.json();
                setVerse(data);
            } catch (e) {
                setError({
                    message: "An error occurred while fetching Shlok data.",
                    statusCode: 500, // You can set a proper status code
                    type: "Try Catch Error"
                });
            }
        }
        fetchData();
    }, []);


    // Replacing spaces in searchQuery with '+' signs
    let searchQueryValue = searchQuery.replace(/[ .]+/g, '+');

    // Fetch data from Open Library Database
    const fetchData = useCallback(
        async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${URL}${searchQueryValue}`);
                const data = await response.json();
                const {docs} = data;

                if(docs.length>0){
                    setSearchResult(`Result for ${searchQuery} is Found`);

                    const newBooks = docs.map((bookSingle) => {
                        const {key, author_name, cover_i, edition_count, first_publish_year, title, public_scan_b, language, number_of_pages_median,ia} = bookSingle;
                        return {
                            id: key,
                            author: author_name,
                            cover_id: cover_i,
                            edition_count: edition_count,
                            first_publish_year: first_publish_year,
                            title: title,
                            available: public_scan_b,
                            language: language,
                            pages: number_of_pages_median,
                            read_link:ia
                        }
                    });
                    setBooks(newBooks)
                } else{
                    setSearchResult(`Result for ${searchQuery} is not Found`);
                    setError({
                        message: `No results found for ${searchQuery}`,
                        statusCode: response.status,
                        type: response.type
                    });
                }
                setIsLoading(false);
            } catch(e) {
                console.error(e);
                setError({
                    message: "An error occurred while fetching Book data.",
                    statusCode: 500, // You can set a proper status code
                    type: "Try Catch Error"
                });
            }
        }, [searchQuery]
    );

    useEffect(() => {
        fetchData();
        setIsLoading(true);
    }, [searchQuery]);

    return(
        <AppContext.Provider value={{ chapter,slok,isLoading, setIsLoading, error, books, setSearchQuery, searchResult, setSearchResult, searchQuery, verse}} >
            {children}
        </AppContext.Provider>
    );

};

// Custom hook for accessing the AppContext
const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};