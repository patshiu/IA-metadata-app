import React from 'react';
import renderer from 'react-test-renderer';

import ItemNotFound from './ItemNotFound';

it('renders item not found notice correctly', () => {
  const tree = renderer.create(<ItemNotFound itemIdentifier="PhantomItem" />).toJSON();
  expect(tree).toMatchSnapshot();
});
