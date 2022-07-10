import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import ItemDescription from './ItemDescription';

test('renders item description with embedded html', () => {
  const description =
    '<h2>This a description of an item.</h2> <p>It may contain <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#">html</a>.</p>';

  const { container } = render(<ItemDescription description={description} />);

  const element = screen.getByTestId('item-description');
  expect(element).toBeDefined();

  const h2 = screen.getByText('This a description of an item.');
  expect(h2).toBeDefined();

  const a = container.querySelector('a');
  expect(a).toHaveTextContent('html');
});
