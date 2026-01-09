import React, {
    useCallback,
    useContext,
    useEffect,
    useState,
    useMemo,
    useRef,
} from "react";
import { getBooks, getShlok } from "./services/apiServices";
import debounce from "lodash/debounce";

const AppContext = React.createContext();

// Cache implementation with expiry management
const createCache = (maxSize = 100, ttl = 600000) => {
    const cache = new Map();
    const expiryMap = new Map();

    return {
        get: (key) => {
            const expiry = expiryMap.get(key);
            if (expiry && expiry < Date.now()) {
                cache.delete(key);
                expiryMap.delete(key);
                return null;
            }
            return cache.get(key);
        },
        set: (key, value) => {
            if (cache.size >= maxSize) {
                const oldestKey = cache.keys().next().value;
                cache.delete(oldestKey);
                expiryMap.delete(oldestKey);
            }
            cache.set(key, value);
            expiryMap.set(key, Date.now() + ttl);
        },
        has: (key) => {
            const expiry = expiryMap.get(key);
            if (expiry && expiry < Date.now()) {
                cache.delete(key);
                expiryMap.delete(key);
                return false;
            }
            return cache.has(key);
        },
        clear: () => {
            cache.clear();
            expiryMap.clear();
        },
    };
};

// Retry utility with exponential backoff
const withExponentialBackoff = async (operation, maxRetries = 3) => {
    let attempt = 0;
    while (attempt < maxRetries) {
        try {
            return await operation();
        } catch (error) {
            if (attempt === maxRetries - 1) throw error;
            const delay = Math.pow(2, attempt) * 100;
            await new Promise((resolve) => setTimeout(resolve, delay));
            attempt++;
        }
    }
};

// Performance measurement utility
const measurePerformance = async (operation, callback) => {
    const startTime = performance.now();
    try {
        const result = await callback();
        const endTime = performance.now();
        console.group(`📊 Performance Metrics`);
        console.log(`Operation: ${operation}`);
        console.log(`Execution Time: ${(endTime - startTime).toFixed(2)}ms`);
        console.log(`Payload Size: ${JSON.stringify(result).length} bytes`);
        console.groupEnd();
        return result;
    } catch (error) {
        console.error(`❌ Error in ${operation}:`, error);
        throw error;
    }
};

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("java");
    const [searchResult, setSearchResult] = useState("java");
    const [verse, setVerse] = useState(null);
    const [chapter, setChapter] = useState();
    const [slok, setSlok] = useState();

    const booksCache = useRef(createCache(50));
    const verseCache = useRef(createCache(20));
    const slokcount = useMemo(() => [47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78], []);

    const processBookData = useCallback(
        (bookSingle) => ({
            id: bookSingle.key,
            author: bookSingle.author_name || [],
            cover_id: bookSingle.cover_i,
            title: bookSingle.title,
            language: bookSingle.language || [],
            pages: bookSingle.number_of_pages_median,
            read_link: bookSingle.ia || [],
        }),
        []
    );

    const fetchData = useCallback(
        async (query) => {
            if (query.length < 2) return;

            setIsLoading(true);
            try {
                const cacheKey = `books-${query}`;
                if (booksCache.current.has(cacheKey)) {
                    const cachedData = booksCache.current.get(cacheKey);
                    setBooks(cachedData);
                    setSearchResult(`Result for ${query} is Found (Cached)`);
                    setIsLoading(false);
                    return;
                }

                const data = await withExponentialBackoff(() =>
                    measurePerformance(
                        "Fetching books",
                        async () => await getBooks(query)
                    )
                );

                // if (data?.docs?.length > 0) {
                //     const newBooks = await measurePerformance(
                //         "Processing books data",
                //         () => data.docs.map(processBookData)
                //     );

                //     booksCache.current.set(cacheKey, newBooks);
                //     setBooks(newBooks);
                //     setSearchResult(`Result for ${query} is Found`);
                // } else {
                //     setBooks([]);
                //     setSearchResult(`Result for ${query} is not Found`);
                // }
                if (data?.docs?.length > 0) {
                    const newBooks = await measurePerformance(
                        'Processing books data',
                        () => data.docs.map(processBookData)
                    );
                    
                    booksCache.current.set(cacheKey, newBooks);
                    setBooks(newBooks);
                    setSearchResult(`Result for ${query} is Found`);
                } else {
                    setBooks([]);
                    setSearchResult(`Result for ${query} is not Found`);
                }
            } catch (error) {
                setError({
                    message: "An error occurred while fetching Book data.",
                    statusCode: error.response?.status || 500,
                    type: "Backend Error",
                    details: error.message,
                });
            } finally {
                setIsLoading(false);
            }
        },
        [processBookData]
    );

    // const fetchVerse = useCallback(
    //     async (chapter, verse) => {
    //         try {
    //             const cacheKey = `verse-${chapter}-${verse}`;
    //             if (verseCache.current.has(cacheKey)) {
    //                 setVerse(verseCache.current.get(cacheKey));
    //                 return;
    //             }

    //             const data = await withExponentialBackoff(() =>
    //                 measurePerformance(
    //                     "Fetching verse",
    //                     async () => await getShlok(chapter, verse)
    //                 )
    //             );

    //             if (data) {
    //                 verseCache.current.set(cacheKey, data);
    //                 setVerse(data);
    //             }
    //         } catch (error) {
    //             setError({
    //                 message: "An error occurred while fetching Shlok data.",
    //                 statusCode: error.response?.status || 500,
    //                 type: "Backend Error",
    //                 details: error.message,
    //             });
    //         }
    //     },
    //     []
    // );

    const debouncedFetchData = useMemo(
        () => debounce(fetchData, 300),
        [fetchData]
    );

    // useEffect(() => {
    //     const initializeVerse = async () => {
    //         const gitaChapter = Math.floor(Math.random() * 17) + 1;
    //         const gitaSlok = Math.floor(Math.random() * slokcount[gitaChapter - 1]) + 1;

    //         setChapter(gitaChapter);
    //         setSlok(gitaSlok);

    //         await fetchVerse(gitaChapter, gitaSlok);
    //     };

    //     initializeVerse();
    // }, [fetchVerse, slokcount]);

    useEffect(() => {
        debouncedFetchData(searchQuery);
        return () => debouncedFetchData.cancel();
    }, [searchQuery, debouncedFetchData]);

    useEffect(() => {
        return () => {
            booksCache.current.clear();
            verseCache.current.clear();
        };
    }, []);

    const contextValue = useMemo(
        () => ({
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
            verse,
        }),
        [chapter, slok, isLoading, error, books, searchResult, searchQuery, verse]
    );

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within an AppProvider");
    }
    return context;
};

export { AppContext, AppProvider, useGlobalContext };