// Mock implementation of @atlaskit/textfield for testing
import React from 'react';

const TextField = ({ placeholder, isCompact, isDisabled, isInvalid, elemAfterInput, ...props }) => (
  <div>
    <input 
      data-testid="atlaskit-textfield"
      placeholder={placeholder}
      disabled={isDisabled}
      data-compact={isCompact}
      data-invalid={isInvalid}
      {...props}
    />
    {elemAfterInput}
  </div>
);

export default TextField;