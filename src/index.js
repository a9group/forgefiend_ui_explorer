import ForgeUI, { render, GlobalPage } from '@forge/ui';
import { App } from './components/App';

export const run = render(<GlobalPage><App /></GlobalPage>);

// Default export for Forge
export default run;
