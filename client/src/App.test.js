import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
});

test('App title is found', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/app-title/i);
});

test('Submit form is found', () => {
  const { getByTestId } = render(<App />)

  getByTestId(/submit-form/i);
})
