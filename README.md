# Forge Fiend UI Explorer - Testing Guide

This document explains how to run and maintain the test suite for the Forge Fiend UI Explorer application.

## Test Structure

The test suite is organized as follows:

```
src/
├── __tests__/
│   ├── index.test.js           # Main entry point tests
│   ├── integration.test.js     # Cross-component integration tests
│   └── testUtils.js           # Shared testing utilities
├── components/
│   └── __tests__/
│       ├── App.test.js         # App component unit tests
│       └── App.integration.test.js # App component integration tests
├── services/
│   └── __tests__/
│       └── userService.test.js # User service tests
└── __mocks__/                 # Mock implementations
    └── @forge/
        ├── ui.js              # Forge UI mocks
        └── api.js             # Forge API mocks
```

## Running Tests

### Install Dependencies
```bash
npm install
```

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Generate Coverage Report
```bash
npm run test:coverage
```

## Test Categories

### Unit Tests
- **App Component**: Tests individual component behavior, state management, and rendering
- **User Service**: Tests API calls, error handling, and data transformation
- **Index Module**: Tests main entry point and component integration

### Integration Tests
- **Cross-component**: Tests interaction between components and services
- **User Flow**: Tests complete user workflows from start to finish
- **Error Scenarios**: Tests graceful error handling across the application

## Mock Strategy

### Forge UI Mocks
- Mock all Forge UI components to return testable strings
- Mock hooks (`useState`, `useEffect`) with Jest functions
- Preserve component structure for testing

### Forge API Mocks
- Mock API responses with realistic data
- Support both success and error scenarios
- Mock `asUser()` and `asApp()` methods

## Coverage Goals

The test suite maintains the following coverage thresholds:
- **Branches**: 80%
- **Functions**: 80%
- **Lines**: 80%
- **Statements**: 80%

## Writing New Tests

### Component Tests
```javascript
import { ComponentName } from '../ComponentName';
import { mockForgeUIHooks } from '../../__tests__/testUtils';

describe('ComponentName', () => {
  it('should render correctly', () => {
    const component = ComponentName();
    expect(component).toContain('expected content');
  });
});
```

### Service Tests
```javascript
import { serviceName } from '../serviceName';
import api from '@forge/api';

jest.mock('@forge/api');

describe('serviceName', () => {
  it('should handle API calls', async () => {
    // Test implementation
  });
});
```

## Best Practices

1. **Isolation**: Each test should be independent and not rely on other tests
2. **Mocking**: Mock external dependencies to focus on the unit under test
3. **Coverage**: Aim for high coverage but focus on meaningful tests
4. **Readability**: Use descriptive test names and clear assertions
5. **Error Cases**: Always test both success and failure scenarios

## Continuous Integration

Tests are designed to run in CI environments and will:
- Fail the build if coverage thresholds are not met
- Provide detailed error messages for debugging
- Generate coverage reports for analysis

## Troubleshooting

### Common Issues

1. **Mock not working**: Ensure mocks are placed in correct `__mocks__` directory
2. **Coverage too low**: Add tests for uncovered branches and functions
3. **Tests failing**: Check mock setup and component dependencies

### Debug Mode
```bash
# Run specific test file
npm test -- App.test.js

# Run with verbose output
npm test -- --verbose

# Run single test
npm test -- --testNamePattern="should render correctly"
```