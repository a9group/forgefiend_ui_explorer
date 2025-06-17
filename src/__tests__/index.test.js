import { run } from '../index';
import ForgeUI, { render, GlobalPage } from '@forge/ui';
import { App } from '../components/App';

// Mock the App component
jest.mock('../components/App');

describe('Index Module', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render App component within GlobalPage', () => {
    const mockApp = '<MockApp />';
    App.mockReturnValue(mockApp);
    
    run;
    
    expect(render).toHaveBeenCalled();
    expect(GlobalPage).toHaveBeenCalled();
    expect(App).toHaveBeenCalled();
  });

  it('should export run function', () => {
    expect(run).toBeDefined();
    expect(typeof run).toBe('object'); // render returns an object
  });

  it('should use correct Forge UI components', () => {
    run;
    
    expect(render).toHaveBeenCalledWith(
      expect.stringContaining('<GlobalPage>')
    );
  });
});