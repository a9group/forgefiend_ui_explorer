import AppComponent from '../index';
import { App } from '../components/App';

// Mock the App component
jest.mock('../components/App');

describe('Index Module', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should export App component as default', () => {
    expect(AppComponent).toBe(App);
  });

  it('should be a valid React component', () => {
    expect(typeof AppComponent).toBe('function');
  });
});