import { App } from '../App';
import { fetchUserDetails } from '../../services/userService';
import { createMockUser, mockForgeUIHooks, expectComponentToContain } from '../../__tests__/testUtils';

jest.mock('../../services/userService');

describe('App Component Integration Tests', () => {
  let hookMocks;
  
  beforeEach(() => {
    jest.clearAllMocks();
    hookMocks = mockForgeUIHooks();
  });

  describe('User Loading States', () => {
    it('should show loading state initially', () => {
      hookMocks.setupMocks(true, null);
      
      const component = App();
      
      expectComponentToContain(component, [
        'User: Loading...'
      ]);
    });

    it('should show user name after successful load', () => {
      const mockUser = createMockUser({ displayName: 'John Doe' });
      hookMocks.setupMocks(true, mockUser);
      
      const component = App();
      
      expectComponentToContain(component, [
        'User: John Doe'
      ]);
    });
  });

  describe('Modal States', () => {
    it('should handle complete modal workflow', () => {
      const mockUser = createMockUser();
      
      // Test closed state
      hookMocks.setupMocks(false, mockUser);
      let component = App();
      expect(component).not.toContain('<ModalDialog');
      
      // Reset and test open state
      jest.clearAllMocks();
      hookMocks = mockForgeUIHooks();
      hookMocks.setupMocks(true, mockUser);
      component = App();
      
      expectComponentToContain(component, [
        '<ModalDialog header="Jira UI Elements"',
        'Global Pages',
        'Issue Panels',
        'Project Pages',
        'Custom Fields'
      ]);
    });
  });

  describe('Error Handling', () => {
    it('should handle user fetch errors gracefully', async () => {
      fetchUserDetails.mockRejectedValue(new Error('Network error'));
      hookMocks.setupMocks(false, null);
      
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      
      const component = App();
      
      // Component should still render basic UI
      expectComponentToContain(component, [
        'Welcome to Forge Fiend UI Explorer!',
        'Explore Jira UI'
      ]);
      
      consoleSpy.mockRestore();
    });
  });
});