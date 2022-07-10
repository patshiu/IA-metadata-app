import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import ItemNotFound from './ItemNotFound';

test('renders notice when item is not found', () => {
  const itemIdentifier = 'Unfound Item';

  render(<ItemNotFound itemIdentifier={itemIdentifier} />);

  const element = screen.getByText("Unable to find the item 'Unfound Item'.");
  expect(element).toBeDefined();
});
