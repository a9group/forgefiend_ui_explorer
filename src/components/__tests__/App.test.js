import { App } from '../App';
import { fetchUserDetails } from '../../services/userService';
import ForgeUI, { useState, useEffect } from '@forge/ui';

// Mock the userService
jest.mock('../../services/userService');

describe('App Component', () => {
  let mockSetOpen, mockSetUser;
  
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Setup useState mocks
    mockSetOpen = jest.fn();
    mockSetUser = jest.fn();
    
    useState
      .mockReturnValueOnce([false, mockSetOpen]) // isOpen state
      .mockReturnValueOnce([null, mockSetUser]);  // user state
  });

  it('should render welcome message and explore button', () => {
    const component = App();
    
    expect(component).toContain('Welcome to Forge Fiend UI Explorer!');
    expect(component).toContain('<Button onClick');
    expect(component).toContain('Explore Jira UI');
  });

  it('should fetch user details on component mount', () => {
    const mockUser = { displayName: 'John Doe', accountId: 'test-id' };
    fetchUserDetails.mockResolvedValue(mockUser);
    
    App();
    
    // Verify useEffect was called
    expect(useEffect).toHaveBeenCalledWith(expect.any(Function), []);
    
    // Verify fetchUserDetails was called
    expect(fetchUserDetails).toHaveBeenCalled();
  });

  it('should not show modal dialog when isOpen is false', () => {
    useState
      .mockReturnValueOnce([false, mockSetOpen]) // isOpen = false
      .mockReturnValueOnce([null, mockSetUser]);
    
    const component = App();
    
    expect(component).not.toContain('<ModalDialog');
  });

  it('should show modal dialog when isOpen is true', () => {
    useState
      .mockReturnValueOnce([true, mockSetOpen]) // isOpen = true
      .mockReturnValueOnce([null, mockSetUser]);
    
    const component = App();
    
    expect(component).toContain('<ModalDialog header="Jira UI Elements"');
    expect(component).toContain('Global Pages');
    expect(component).toContain('Issue Panels');
    expect(component).toContain('Project Pages');
    expect(component).toContain('Custom Fields');
  });

  it('should display user name when user is loaded', () => {
    const mockUser = { displayName: 'Jane Smith' };
    useState
      .mockReturnValueOnce([true, mockSetOpen])
      .mockReturnValueOnce([mockUser, mockSetUser]);
    
    const component = App();
    
    expect(component).toContain('User: Jane Smith');
  });

  it('should display loading message when user is not loaded', () => {
    useState
      .mockReturnValueOnce([true, mockSetOpen])
      .mockReturnValueOnce([null, mockSetUser]);
    
    const component = App();
    
    expect(component).toContain('User: Loading...');
  });

  it('should handle button click to open modal', () => {
    const component = App();
    
    // The button should have an onClick handler that calls setOpen(true)
    expect(component).toContain('<Button onClick');
  });

  it('should handle modal close', () => {
    useState
      .mockReturnValueOnce([true, mockSetOpen])
      .mockReturnValueOnce([null, mockSetUser]);
    
    const component = App();
    
    // The modal should have an onClose handler that calls setOpen(false)
    expect(component).toContain('onClose');
  });
});