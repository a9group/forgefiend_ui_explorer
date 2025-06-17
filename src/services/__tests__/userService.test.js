import { fetchUserDetails } from '../userService';
import api, { route } from '@forge/api';

// Mock the @forge/api module
jest.mock('@forge/api');

describe('userService', () => {
  let mockRequestJira, mockAsUser, mockResponse;

  beforeEach(() => {
    jest.clearAllMocks();
    
    mockResponse = {
      json: jest.fn()
    };
    
    mockRequestJira = jest.fn().mockResolvedValue(mockResponse);
    mockAsUser = jest.fn().mockReturnValue({
      requestJira: mockRequestJira
    });
    
    api.asUser = mockAsUser;
  });

  describe('fetchUserDetails', () => {
    it('should fetch user details successfully', async () => {
      const expectedUser = {
        displayName: 'John Doe',
        accountId: 'test-account-id',
        emailAddress: 'john.doe@example.com'
      };
      
      mockResponse.json.mockResolvedValue(expectedUser);
      
      const result = await fetchUserDetails();
      
      expect(api.asUser).toHaveBeenCalled();
      expect(mockRequestJira).toHaveBeenCalledWith('/rest/api/3/myself');
      expect(mockResponse.json).toHaveBeenCalled();
      expect(result).toEqual(expectedUser);
    });

    it('should use route template literal correctly', async () => {
      const expectedUser = { displayName: 'Test User' };
      mockResponse.json.mockResolvedValue(expectedUser);
      
      await fetchUserDetails();
      
      expect(route).toHaveBeenCalled();
      expect(mockRequestJira).toHaveBeenCalledWith('/rest/api/3/myself');
    });

    it('should handle API request errors', async () => {
      const errorMessage = 'API request failed';
      mockRequestJira.mockRejectedValue(new Error(errorMessage));
      
      // Mock console.error to avoid noise in test output
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      
      await expect(fetchUserDetails()).rejects.toThrow(errorMessage);
      
      expect(consoleSpy).toHaveBeenCalledWith('Failed to fetch user details:', expect.any(Error));
      
      consoleSpy.mockRestore();
    });

    it('should handle JSON parsing errors', async () => {
      const jsonError = new Error('Invalid JSON');
      mockResponse.json.mockRejectedValue(jsonError);
      
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      
      await expect(fetchUserDetails()).rejects.toThrow('Invalid JSON');
      
      expect(consoleSpy).toHaveBeenCalledWith('Failed to fetch user details:', jsonError);
      
      consoleSpy.mockRestore();
    });

    it('should handle network errors', async () => {
      const networkError = new Error('Network error');
      mockAsUser.mockImplementation(() => {
        throw networkError;
      });
      
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      
      await expect(fetchUserDetails()).rejects.toThrow('Network error');
      
      expect(consoleSpy).toHaveBeenCalledWith('Failed to fetch user details:', networkError);
      
      consoleSpy.mockRestore();
    });
  });
});