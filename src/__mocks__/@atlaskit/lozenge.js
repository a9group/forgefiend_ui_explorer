// Mock implementation of @atlaskit/lozenge for testing
import React from 'react';

const Lozenge = ({ children, appearance, isBold, ...props }) => (
  <span 
    data-testid="atlaskit-lozenge"
    data-appearance={appearance}
    data-bold={isBold}
    {...props}
  >
    {children}
  </span>
);

export default Lozenge;