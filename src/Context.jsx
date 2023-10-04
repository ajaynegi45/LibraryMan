import React, {useCallback, useContext, useEffect, useState} from "react";
// context (warehouse)
// Provider (Delivery Boy)
// Consumer (useContext(you))

// Context (Warehouse) for managing application state
const AppContext = React.createContext();

// URL for Open Library API
const URL = "https://openlibrary.org/search.json?title=";

const AppProvider = ({children}) => {



    const [verse, setVerse] = useState(null);
    const [chapter, setChapter] = useState();
    const [slok, setSlok] = useState();
    const slokcount = [47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78];

    useEffect(() => {
        const gitaChapter = Math.floor(Math.random() * 17) + 1;
        const gitaSlok = Math.floor(Math.random() * slokcount[gitaChapter - 1]) + 1;

        setChapter(gitaChapter);
        setSlok(gitaSlok);

        console.log(`This is chapter ${gitaChapter}`);
        console.log(`This is slok ${gitaSlok}`);

        async function fetchData() {
            try {
                const response = await fetch(`https://bhagavadgitaapi.in/slok/${gitaChapter}/${gitaSlok}/`);
                const data = await response.json();
                setVerse(data);
                console.log(`This is Data call:`, data);
            } catch (e) {
                // Handle errors
            }
        }

        fetchData();
    }, []);


    // const [verse, setVerse] = useState(null);
    // const [chapter, setChapter] = useState(); // Set an initial chapter value
    // const [slok, setSlok] = useState(); // Set an initial slok value
    //
    //
    // const slokcount = [47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78]
    //
    // useEffect(() => {
    //     const gitaChapter = Math.floor(Math.random() * 17) + 1
    //     const gitaSlok = Math.floor(Math.random() * slokcount[gitaChapter - 1]) + 1
    //
    //     setChapter(gitaChapter);
    //     setSlok(gitaSlok);
    //
    //     console.log(`This is chapter ${gitaChapter}`);
    //     console.log(`this is slok ${gitaSlok}`);
    // }, []);
    //
    // const fetchVerse = useCallback(async () => {
    //     try {
    //         const response = await fetch(`https://bhagavadgitaapi.in/slok/${chapter}/${slok}/`);
    //         const data = await response.json();
    //         setVerse(data);
    //         console.log(`This is Data call:`, data); // Removed ${data} from the log
    //     } catch (e) {
    //         // Handle errors
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     fetchVerse();
    // }, [chapter, slok]);
    //
    //
    // useEffect(() => {
    //     console.log(verse);
    // }, [verse]);
















    // State variables for managing data and UI state
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("java");
    const [searchResult, setSearchResult] = useState("java");

    // Replacing spaces in searchQuery with '+' signs
    let searchQueryValue = searchQuery.replace(/[ .]+/g, '+');

    // Fetch data from Open Library Database
    const fetchData = useCallback(
        async () => {
            setIsLoading(true);
            try {
                console.log(`Calling server with query ${searchQueryValue}`)
                const response = await fetch(`${URL}${searchQueryValue}`);
                const data = await response.json();
                const {docs} = data;

                console.log(docs);

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
                    message: "An error occurred while fetching data.",
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


    useEffect(()=>{
        console.log(`this is state searchQuery ${searchQuery}. This is going to search ${searchQueryValue}`)
    },[searchQueryValue])













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