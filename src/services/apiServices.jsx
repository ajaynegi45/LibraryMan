import axios from 'axios';

const BASE_URL = "http://localhost:8080/api"; // Update to your backend URL

export const getBooks = async (searchQuery) => {
    const response = await axios.get(`${BASE_URL}/books`, {
        params: { title: searchQuery }
    });
    return response.data;
};

export const getShlok = async (chapter, slok) => {
    const response = await axios.get(`${BASE_URL}/gita/${chapter}/${slok}`);
    return response.data;
};

export const getSingleBook = async (id) => {
    const URL = `https://openlibrary.org/works/${id}.json`;
    const response = await axios.get(URL);
    return response.data;
};
export const getAllBooks = async () => {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data;
};

export const fetchAllBorrowings = async () => {
    const response = await axios.get(`${BASE_URL}/borrowings`);
    return response.data;
};
