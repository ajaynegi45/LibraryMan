import axios from 'axios';

const BASE_URL = "http://localhost:8080/api";

// Utility funkce pro měření výkonu
const measurePerformance = async (apiCall, description) => {
    const startTime = performance.now();
    
    try {
        const result = await apiCall();
        
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        
        console.group(`⏱️ Performance Profiling: ${description}`);
        console.log(`Execution Time: ${executionTime.toFixed(2)} ms`);
        console.log(`Payload Size: ${JSON.stringify(result).length} bytes`);
        console.groupEnd();
        
        return result;
    } catch (error) {
        console.error(`Error in ${description}:`, error);
        throw error;
    }
};

export const getBooks = async (searchQuery, page = 1, limit = 20) => {
    const fetchBooks = async () => {
        const response = await axios.get(`${BASE_URL}/books`, {
            params: {
                title: searchQuery,
                page,
                limit,
                fields: 'key,author_name,cover_i,title,language',
            },
        });
        return response.data;
    };

    return await withExponentialBackoff(fetchBooks, 3); // Retries with backoff
};

export const getShlok = async (chapter, slok) => {
    try {
        return measurePerformance(
            async () => {
                const response = await axios.get(`${BASE_URL}/gita/${chapter}/${slok}`);
                return response.data;
            },
            `Get Shlok (Chapter: ${chapter}, Verse: ${slok})`
        );
    } catch (error) {
        console.error(`Error fetching Shlok: ${error.response?.data || error.message}`);
        return null;
    }
};

export const getSingleBook = async (id) => {
    return measurePerformance(
        async () => {
            const URL = `https://openlibrary.org/works/${id}.json`;
            const response = await axios.get(URL);
            return response.data;
        },
        `Get Single Book (ID: ${id})`
    );
};

export const getAllBooks = async () => {
    return measurePerformance(
        async () => {
            const response = await axios.get(`${BASE_URL}/books`);
            return response.data;
        },
        'Get All Books'
    );
};

export const fetchAllBorrowings = async () => {
    return measurePerformance(
        async () => {
            const response = await axios.get(`${BASE_URL}/borrowings`);
            return response.data;
        },
        'Fetch All Borrowings'
    );
};

// Dodatečná funkce pro agregované měření výkonu
export const performanceAggregator = async () => {
    const measurements = {
        'getBooks': [],
        'getShlok': [],
        'getSingleBook': [],
        'getAllBooks': [],
        'fetchAllBorrowings': []
    };

    const runMeasurement = async (apiCall, key, ...args) => {
        const startTime = performance.now();
        try {
            await apiCall(...args);
            const endTime = performance.now();
            measurements[key].push(endTime - startTime);
        } catch (error) {
            console.error(`Error in ${key}:`, error);
        }
    };

    // Opakované volání pro přesnější měření
    const iterationCount = 10;
    for (let i = 0; i < iterationCount; i++) {
        await runMeasurement(getBooks, 'getBooks', 'java');
        await runMeasurement(getShlok, 'getShlok', 1, 1);
        await runMeasurement(getSingleBook, 'getSingleBook', 'OL45804W');
        await runMeasurement(getAllBooks, 'getAllBooks');
        await runMeasurement(fetchAllBorrowings, 'fetchAllBorrowings');
    }

    // Výpočet agregovaných statistik
    const aggregatedStats = Object.keys(measurements).reduce((acc, key) => {
        const times = measurements[key];
        acc[key] = {
            average: times.reduce((a, b) => a + b, 0) / times.length,
            min: Math.min(...times),
            max: Math.max(...times)
        };
        return acc;
    }, {});

    console.group('🔍 Performance Aggregation Results');
    console.table(aggregatedStats);
    console.groupEnd();

    return aggregatedStats;
};

const withExponentialBackoff = async (operation, retries = 3) => {
    let attempt = 0;
    while (attempt < retries) {
        try {
            return await operation();
        } catch (error) {
            if (attempt === retries - 1) throw error;
            const delay = Math.pow(2, attempt) * 100; // Exponential delay
            await new Promise((resolve) => setTimeout(resolve, delay));
            attempt++;
        }
    }
};