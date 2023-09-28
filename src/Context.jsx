import React, {useContext, useEffect, useState} from "react";
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

    // Replacing spaces in searchQuery with '+' signs
    // let searchQueryValue = searchQuery;
    // searchQueryValue.replace(/[ .]+/g, '+');

    let searchQueryValue = searchQuery.replace(/[ .]+/g, '+');






    //gy.   hhg. g j j  h.   gvhj.   kjh

    // Fetch data from Open Library Database
    const fetchData = async () => {
        try {
            console.log(`Calling server with query ${searchQueryValue}`)
            const response = await fetch(`${URL}${searchQueryValue}`);
            const data = await response.json();
            const {docs} = data;

            if(docs.length>0){

                setSearchResult(`Result for ${searchQuery} is Found`);

                const newBooks = docs.map((bookSingle) => {
                    const {key, author_name, cover_i, edition_count, first_publish_year, title, public_scan_b, language, number_of_pages_median} = bookSingle;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title,
                        available: public_scan_b,
                        language: language,
                        pages: number_of_pages_median
                    }
                });
                setBooks(newBooks)

            } else {
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
    };

    useEffect(() => {
        fetchData();
        setIsLoading(true);
    }, [searchQuery]);


    useEffect(()=>{
        console.log(`this is state searchQuery ${searchQuery}. This is going to search ${searchQueryValue}`)
    },[searchQueryValue])

    return(
        <AppContext.Provider value={{ isLoading, setIsLoading, error, books, setSearchQuery, searchResult, setSearchResult }} >
            {children}
        </AppContext.Provider>
    );

};

// Custom hook for accessing the AppContext
const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};