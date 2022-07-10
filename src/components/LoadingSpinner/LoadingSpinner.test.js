import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import LoadingSpinner from './LoadingSpinner';

test('renders loading spinner', () => {
  render(<LoadingSpinner />);

  const element = screen.getByTestId('loading-spinner-element');
  expect(element).toBeDefined();
});
