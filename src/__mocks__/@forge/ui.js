// Mock implementation of @forge/ui for testing
export const render = jest.fn((component) => component);

export const Fragment = ({ children }) => children;
export const Text = ({ children }) => `<Text>${children}</Text>`;
export const Button = ({ text, onClick }) => `<Button onClick="${onClick}">${text}</Button>`;
export const ModalDialog = ({ header, children, onClose }) => 
  `<ModalDialog header="${header}" onClose="${onClose}">${children}</ModalDialog>`;
export const GlobalPage = ({ children }) => `<GlobalPage>${children}</GlobalPage>`;

export const useState = jest.fn((initialValue) => {
  let value = initialValue;
  const setValue = jest.fn((newValue) => {
    value = newValue;
  });
  return [value, setValue];
});

export const useEffect = jest.fn((effect, deps) => {
  if (typeof effect === 'function') {
    effect();
  }
});

export default {
  render,
  Fragment,
  Text,
  Button,
  ModalDialog,
  GlobalPage,
  useState,
  useEffect
};