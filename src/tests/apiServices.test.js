import axios from 'axios';
import { getBooks, getShlok, getSingleBook, getAllBooks, fetchAllBorrowings } from '../services/apiServices';

jest.mock('axios');

describe('API Services', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('getBooks makes correct API call', async () => {
    const mockData = [{ id: 1, title: 'Test Book' }];
    axios.get.mockResolvedValueOnce({ data: mockData });

    const result = await getBooks('test');

    expect(axios.get).toHaveBeenCalledWith(
      'http://localhost:8080/api/books',
      { params: { title: 'test' } }
    );
    expect(result).toEqual(mockData);
  });

  test('getShlok makes correct API call', async () => {
    const mockData = { verse: 'test verse' };
    axios.get.mockResolvedValueOnce({ data: mockData });

    const result = await getShlok(1, 1);

    expect(axios.get).toHaveBeenCalledWith(
      'http://localhost:8080/api/gita/1/1'
    );
    expect(result).toEqual(mockData);
  });

  test('getSingleBook makes correct API call', async () => {
    const mockData = { title: 'Test Book' };
    axios.get.mockResolvedValueOnce({ data: mockData });

    const result = await getSingleBook('123');

    expect(axios.get).toHaveBeenCalledWith(
      'https://openlibrary.org/works/123.json'
    );
    expect(result).toEqual(mockData);
  });

  test('getAllBooks makes correct API call', async () => {
    const mockData = [{ id: 1, title: 'Test Book' }];
    axios.get.mockResolvedValueOnce({ data: mockData });

    const result = await getAllBooks();

    expect(axios.get).toHaveBeenCalledWith(
      'http://localhost:8080/api/books'
    );
    expect(result).toEqual(mockData);
  });

  test('fetchAllBorrowings makes correct API call', async () => {
    const mockData = [{ id: 1, book: 'Test Book' }];
    axios.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchAllBorrowings();

    expect(axios.get).toHaveBeenCalledWith(
      'http://localhost:8080/api/borrowings'
    );
    expect(result).toEqual(mockData);
  });

  test('handles API errors correctly', async () => {
    const errorMessage = 'Network Error';
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    await expect(getBooks('test')).rejects.toThrow(errorMessage);
  });
});
