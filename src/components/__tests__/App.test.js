import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { App } from '../App';
import { fetchUserDetails } from '../../services/userService';

// Mock the userService
jest.mock('../../services/userService');

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render welcome message and explore button', () => {
    render(<App />);
    
    expect(screen.getByText('Welcome to Forge Fiend UI Explorer! Click below to learn about Jira UI elements.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Explore Jira UI' })).toBeInTheDocument();
  });

  it('should fetch user details on component mount', async () => {
    const mockUser = { displayName: 'John Doe', accountId: 'test-id' };
    fetchUserDetails.mockResolvedValue(mockUser);
    
    render(<App />);
    
    await waitFor(() => {
      expect(fetchUserDetails).toHaveBeenCalled();
    });
  });

  it('should not show modal dialog initially', () => {
    render(<App />);
    
    expect(screen.queryByTestId('atlaskit-modal')).not.toBeInTheDocument();
  });

  it('should show modal dialog when button is clicked', () => {
    render(<App />);
    
    const button = screen.getByRole('button', { name: 'Explore Jira UI' });
    fireEvent.click(button);
    
    expect(screen.getByTestId('atlaskit-modal')).toBeInTheDocument();
    expect(screen.getByText('Jira UI Elements')).toBeInTheDocument();
    expect(screen.getByText(/Global Pages/)).toBeInTheDocument();
    expect(screen.getByText(/Issue Panels/)).toBeInTheDocument();
    expect(screen.getByText(/Project Pages/)).toBeInTheDocument();
    expect(screen.getByText(/Custom Fields/)).toBeInTheDocument();
  });

  it('should display user name when user is loaded', async () => {
    const mockUser = { displayName: 'Jane Smith' };
    fetchUserDetails.mockResolvedValue(mockUser);
    
    render(<App />);
    
    // Open modal to see user info
    const button = screen.getByRole('button', { name: 'Explore Jira UI' });
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(screen.getByText('User: Jane Smith')).toBeInTheDocument();
    });
  });

  it('should display loading message when user is not loaded', () => {
    fetchUserDetails.mockImplementation(() => new Promise(() => {})); // Never resolves
    
    render(<App />);
    
    // Open modal to see user info
    const button = screen.getByRole('button', { name: 'Explore Jira UI' });
    fireEvent.click(button);
    
    expect(screen.getByText('User: Loading...')).toBeInTheDocument();
  });

  it('should close modal when close button is clicked', () => {
    render(<App />);
    
    // Open modal
    const openButton = screen.getByRole('button', { name: 'Explore Jira UI' });
    fireEvent.click(openButton);
    
    expect(screen.getByTestId('atlaskit-modal')).toBeInTheDocument();
    
    // Close modal
    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);
    
    expect(screen.queryByTestId('atlaskit-modal')).not.toBeInTheDocument();
  });
});