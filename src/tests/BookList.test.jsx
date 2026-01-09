import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookList from '../components/BookList';
import { useGlobalContext } from "../Context";

// Mock the context
jest.mock('../Context', () => ({
  useGlobalContext: jest.fn()
}));

// Mock the images
jest.mock('../assets/images/BookCoverunavailable.jpg', () => 'mock-book-cover');
jest.mock('../assets/gif/output-onlinegiftools.gif', () => 'mock-loading-gif');

describe('BookList Component', () => {
  const mockBooks = [
    {
      id: '/works/123',
      title: 'Test Book 1',
      author: ['Author 1', 'Author 2'],
      language: ['English'],
      pages: 200,
      cover_id: '12345',
      read_link: ['/read/1']
    },
    {
      id: '/works/456',
      title: 'Test Book 2',
      author: [],
      language: [],
      pages: null,
      cover_id: null,
      read_link: []
    }
  ];

  beforeEach(() => {
    useGlobalContext.mockReturnValue({
      books: [],
      searchResult: '',
      isLoading: false
    });
  });

  test('displays loading state', () => {
    useGlobalContext.mockReturnValue({
      books: [],
      searchResult: 'Test Search',
      isLoading: true
    });

    render(
      <BrowserRouter future={{ 
        v7_startTransition: true,
        v7_relativeSplatPath: true 
      }}>
        <BookList />
      </BrowserRouter>
    );

    expect(screen.getByText('Fetching Data for Test Search...')).toBeInTheDocument();
    expect(screen.getByAltText('Loading Gif')).toBeInTheDocument();
  });

  test('displays no books found message when books array is empty', () => {
    useGlobalContext.mockReturnValue({
      books: [],
      searchResult: '',
      isLoading: false
    });

    render(
      <BrowserRouter future={{ 
        v7_startTransition: true,
        v7_relativeSplatPath: true 
      }}>
        <BookList />
      </BrowserRouter>
    );

    expect(screen.getByText('No books found for your search.')).toBeInTheDocument();
  });
});