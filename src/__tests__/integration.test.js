import { App } from '../components/App';
import { fetchUserDetails } from '../services/userService';
import ForgeUI, { useState, useEffect } from '@forge/ui';

// Integration tests that test the full flow
jest.mock('../services/userService');

describe('Integration Tests', () => {
  let mockSetOpen, mockSetUser;
  
  beforeEach(() => {
    jest.clearAllMocks();
    
    mockSetOpen = jest.fn();
    mockSetUser = jest.fn();
    
    useState
      .mockReturnValueOnce([false, mockSetOpen])
      .mockReturnValueOnce([null, mockSetUser]);
  });

  it('should complete full user loading flow', async () => {
    const mockUser = {
      displayName: 'Integration Test User',
      accountId: 'integration-test-id',
      emailAddress: 'integration@test.com'
    };
    
    fetchUserDetails.mockResolvedValue(mockUser);
    
    // Render the component
    const component = App();
    
    // Verify the component structure
    expect(component).toContain('Welcome to Forge Fiend UI Explorer!');
    expect(component).toContain('Explore Jira UI');
    
    // Verify user service integration
    expect(fetchUserDetails).toHaveBeenCalled();
    expect(useEffect).toHaveBeenCalledWith(expect.any(Function), []);
  });

  it('should handle complete modal interaction flow', () => {
    const mockUser = { displayName: 'Modal Test User' };
    
    // Test with modal closed
    useState
      .mockReturnValueOnce([false, mockSetOpen])
      .mockReturnValueOnce([mockUser, mockSetUser]);
    
    let component = App();
    expect(component).not.toContain('<ModalDialog');
    
    // Reset mocks for modal open state
    jest.clearAllMocks();
    useState
      .mockReturnValueOnce([true, mockSetOpen])
      .mockReturnValueOnce([mockUser, mockSetUser]);
    
    // Test with modal open
    component = App();
    expect(component).toContain('<ModalDialog header="Jira UI Elements"');
    expect(component).toContain('Modal Test User');
  });

  it('should handle error states gracefully', async () => {
    fetchUserDetails.mockRejectedValue(new Error('Service unavailable'));
    
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    
    // Component should still render even if user fetch fails
    const component = App();
    expect(component).toContain('Welcome to Forge Fiend UI Explorer!');
    
    consoleSpy.mockRestore();
  });

  it('should display all UI elements information in modal', () => {
    useState
      .mockReturnValueOnce([true, mockSetOpen])
      .mockReturnValueOnce([null, mockSetUser]);
    
    const component = App();
    
    // Verify all UI elements are documented
    const expectedElements = [
      'Global Pages',
      'Issue Panels',
      'Project Pages',
      'Custom Fields'
    ];
    
    expectedElements.forEach(element => {
      expect(component).toContain(element);
    });
  });
});