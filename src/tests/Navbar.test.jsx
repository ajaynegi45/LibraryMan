import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Mock the Navlink component
jest.mock('../components/Navlink.jsx', () => () => <div data-testid="mock-navlink">Mock Navlink</div>);

describe('Navbar Component', () => {
  const mockChangeMode = jest.fn();

  const renderNavbar = (mode = 'light') => {
    return render(
      <BrowserRouter future={{ 
        v7_startTransition: true,
        v7_relativeSplatPath: true 
      }}>
        <Navbar mode={mode} changeMode={mockChangeMode} />
      </BrowserRouter>
    );
  };

  test('renders navbar with logo and title', () => {
    renderNavbar();
    
    expect(screen.getByAltText('literature')).toBeInTheDocument();
    expect(screen.getByText('Library')).toBeInTheDocument();
  });

  test('renders login button', () => {
    renderNavbar();
    
    expect(screen.getByText('Log In')).toBeInTheDocument();
  });

});
