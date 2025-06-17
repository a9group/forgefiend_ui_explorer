// Test utilities for common testing patterns

export const createMockUser = (overrides = {}) => ({
  displayName: 'Test User',
  accountId: 'test-account-id',
  emailAddress: 'test@example.com',
  ...overrides
});

export const createMockApiResponse = (data) => ({
  json: jest.fn().mockResolvedValue(data)
});

export const mockForgeUIHooks = () => {
  const mockSetOpen = jest.fn();
  const mockSetUser = jest.fn();
  
  return {
    mockSetOpen,
    mockSetUser,
    setupMocks: (isOpen = false, user = null) => {
      const { useState } = require('@forge/ui');
      useState
        .mockReturnValueOnce([isOpen, mockSetOpen])
        .mockReturnValueOnce([user, mockSetUser]);
    }
  };
};

export const expectComponentToContain = (component, expectedTexts) => {
  expectedTexts.forEach(text => {
    expect(component).toContain(text);
  });
};

export const expectComponentNotToContain = (component, unexpectedTexts) => {
  unexpectedTexts.forEach(text => {
    expect(component).not.toContain(text);
  });
};