// Mock implementation of @atlaskit/form for testing
import React from 'react';

const Form = ({ children, onSubmit }) => {
  const formProps = { onSubmit };
  return (
    <div data-testid="atlaskit-form">
      {children({ formProps })}
    </div>
  );
};

export const Field = ({ children, name, label, isRequired }) => {
  const fieldProps = { name, 'data-required': isRequired };
  return (
    <div data-testid="atlaskit-field" data-label={label}>
      {children({ fieldProps })}
    </div>
  );
};

export const FormFooter = ({ children }) => (
  <div data-testid="atlaskit-form-footer">{children}</div>
);

export const HelperMessage = ({ children }) => (
  <div data-testid="atlaskit-helper-message">{children}</div>
);

export const ErrorMessage = ({ children }) => (
  <div data-testid="atlaskit-error-message">{children}</div>
);

export default Form;