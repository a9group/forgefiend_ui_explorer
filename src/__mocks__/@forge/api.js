// Mock implementation of @forge/api for testing
const mockResponse = {
  json: jest.fn(() => Promise.resolve({
    displayName: 'Test User',
    accountId: 'test-account-id',
    emailAddress: 'test@example.com'
  }))
};

const mockAsUser = jest.fn(() => ({
  requestJira: jest.fn(() => Promise.resolve(mockResponse))
}));

const mockAsApp = jest.fn(() => ({
  requestJira: jest.fn(() => Promise.resolve(mockResponse))
}));

export const route = jest.fn((strings, ...values) => {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] || '');
  }, '');
});

const api = {
  asUser: mockAsUser,
  asApp: mockAsApp
};

export { mockAsUser, mockAsApp, mockResponse };
export default api;