import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import ItemTitle from './ItemTitle';

test('renders item title', () => {
  const title = 'This Is An Item Title';

  render(<ItemTitle title={title} />);

  const element = screen.getByText('This Is An Item Title');
  expect(element).toBeDefined();
});
