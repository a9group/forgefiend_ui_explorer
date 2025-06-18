// Mock implementation of @atlaskit/tabs for testing
import React from 'react';

const Tabs = ({ children, onChange, selected }) => (
  <div data-testid="atlaskit-tabs" data-selected={selected}>
    {children}
  </div>
);

export const Tab = ({ children }) => (
  <div data-testid="atlaskit-tab">{children}</div>
);

export const TabList = ({ children }) => (
  <div data-testid="atlaskit-tab-list">{children}</div>
);

export const TabPanel = ({ children }) => (
  <div data-testid="atlaskit-tab-panel">{children}</div>
);

export default Tabs;