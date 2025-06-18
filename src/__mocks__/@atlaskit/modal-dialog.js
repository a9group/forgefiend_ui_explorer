// Mock implementation of @atlaskit/modal-dialog for testing
import React from 'react';

export const Modal = ({ children, onClose, ...props }) => (
  <div data-testid="atlaskit-modal" data-onclose={onClose} {...props}>
    {children}
  </div>
);

export const ModalHeader = ({ children, ...props }) => (
  <div data-testid="atlaskit-modal-header" {...props}>
    {children}
  </div>
);

export const ModalBody = ({ children, ...props }) => (
  <div data-testid="atlaskit-modal-body" {...props}>
    {children}
  </div>
);

export const ModalFooter = ({ children, ...props }) => (
  <div data-testid="atlaskit-modal-footer" {...props}>
    {children}
  </div>
);