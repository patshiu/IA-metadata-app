import React from 'react';
import renderer from 'react-test-renderer';

import PromptSelectItem from './PromptSelectItem';

it('renders prompt to select an item correctly', () => {
  const tree = renderer.create(<PromptSelectItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
