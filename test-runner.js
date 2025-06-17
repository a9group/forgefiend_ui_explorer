#!/usr/bin/env node

// Simple test runner for Forge Fiend UI Explorer
// This runs basic tests without complex dependencies

const fs = require('fs');
const path = require('path');

// Mock console for cleaner output
const originalConsole = console;
const testConsole = {
  log: () => {},
  error: () => {},
  warn: () => {}
};

// Test results tracking
let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

// Simple assertion library
function expect(actual) {
  return {
    toBe: (expected) => {
      if (actual === expected) {
        return true;
      }
      throw new Error(`Expected ${actual} to be ${expected}`);
    },
    toContain: (expected) => {
      if (typeof actual === 'string' && actual.includes(expected)) {
        return true;
      }
      throw new Error(`Expected ${actual} to contain ${expected}`);
    },
    toBeDefined: () => {
      if (actual !== undefined) {
        return true;
      }
      throw new Error(`Expected ${actual} to be defined`);
    },
    toHaveBeenCalled: () => {
      if (actual && actual.mock && actual.mock.calls.length > 0) {
        return true;
      }
      throw new Error(`Expected function to have been called`);
    }
  };
}

// Mock jest functions
global.jest = {
  fn: (implementation) => {
    const mockFn = function(...args) {
      mockFn.mock.calls.push(args);
      if (implementation) {
        return implementation(...args);
      }
    };
    mockFn.mock = { calls: [] };
    mockFn.mockReturnValue = (value) => {
      mockFn.mockImplementation = () => value;
      return mockFn;
    };
    mockFn.mockResolvedValue = (value) => {
      mockFn.mockImplementation = () => Promise.resolve(value);
      return mockFn;
    };
    mockFn.mockRejectedValue = (value) => {
      mockFn.mockImplementation = () => Promise.reject(value);
      return mockFn;
    };
    return mockFn;
  },
  clearAllMocks: () => {},
  spyOn: (obj, method) => {
    const original = obj[method];
    const spy = global.jest.fn(original);
    obj[method] = spy;
    spy.mockRestore = () => {
      obj[method] = original;
    };
    return spy;
  }
};

// Test framework functions
function describe(name, fn) {
  console.log(`\n📁 ${name}`);
  fn();
}

function it(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  ✅ ${name}`);
    passedTests++;
  } catch (error) {
    console.log(`  ❌ ${name}`);
    console.log(`     ${error.message}`);
    failedTests++;
  }
}

// Make globals available
global.describe = describe;
global.it = it;
global.expect = expect;
global.console = testConsole;

// Run basic smoke tests
console.log('🧪 Running Forge Fiend UI Explorer Tests\n');

describe('Test Setup', () => {
  it('should run tests successfully', () => {
    expect(true).toBe(true);
  });

  it('should have access to test globals', () => {
    expect(describe).toBeDefined();
    expect(it).toBeDefined();
    expect(expect).toBeDefined();
  });

  it('should be able to mock functions', () => {
    const mockFn = jest.fn();
    mockFn('test');
    expect(mockFn).toHaveBeenCalled();
  });
});

describe('File Structure', () => {
  it('should have main source files', () => {
    expect(fs.existsSync('src/index.js')).toBe(true);
    expect(fs.existsSync('src/components/App.js')).toBe(true);
    expect(fs.existsSync('src/services/userService.js')).toBe(true);
  });

  it('should have test files', () => {
    expect(fs.existsSync('src/__tests__')).toBe(true);
    expect(fs.existsSync('src/components/__tests__')).toBe(true);
    expect(fs.existsSync('src/services/__tests__')).toBe(true);
  });

  it('should have mock files', () => {
    expect(fs.existsSync('src/__mocks__/@forge')).toBe(true);
    expect(fs.existsSync('src/__mocks__/@forge/ui.js')).toBe(true);
    expect(fs.existsSync('src/__mocks__/@forge/api.js')).toBe(true);
  });
});

describe('Configuration', () => {
  it('should have Jest configuration', () => {
    expect(fs.existsSync('jest.config.js')).toBe(true);
  });

  it('should have package.json with test scripts', () => {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    expect(packageJson.scripts.test).toBeDefined();
  });
});

// Print results
console.log('\n📊 Test Results:');
console.log(`   Total: ${totalTests}`);
console.log(`   Passed: ${passedTests}`);
console.log(`   Failed: ${failedTests}`);

if (failedTests === 0) {
  console.log('\n🎉 All tests passed!');
  process.exit(0);
} else {
  console.log('\n💥 Some tests failed!');
  process.exit(1);
}