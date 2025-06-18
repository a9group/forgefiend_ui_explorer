// Mock implementation of @atlaskit/button for testing
import React from 'react';

const Button = ({ children, onClick, appearance, ...props }) => (
  <button 
    onClick={onClick} 
    data-testid="atlaskit-button"
    data-appearance={appearance}
    {...props}
  >
    {children}
  </button>
);

export default Button;