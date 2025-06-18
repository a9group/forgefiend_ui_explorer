// Jest setup file for additional configuration
import '@testing-library/jest-dom';
global.console = {
  ...console,
  // Uncomment to ignore specific console outputs during tests
  // log: jest.fn(),
  // warn: jest.fn(),
  // error: jest.fn(),
};