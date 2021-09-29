import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const element = document.querySelector('div');
  expect(element).toBeInTheDocument();
});
