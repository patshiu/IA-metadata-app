import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import ItemKeyInfo from './ItemKeyInfo';

test('renders key info section', () => {
  const description =
    '<h2>This a description of an item.</h2> <p>It may contain <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#">html</a>.</p>';
  const title = 'This Is An Item Title';

  render(<ItemKeyInfo title={title} description={description} />);

  const element = screen.getByTestId('item-key-info');
  expect(element).toBeDefined();

  const ItemTitle = screen.getByText('This Is An Item Title');
  expect(ItemTitle).toBeDefined();

  const ItemDescription = screen.getByTestId('item-description');
  expect(ItemDescription).toBeDefined();
});
