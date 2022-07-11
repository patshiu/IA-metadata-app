import React from 'react';
import renderer from 'react-test-renderer';

import SectionTitle from './SectionTitle';

it('renders section title with item count correct', () => {
  const title = 'Section Title';
  const count = 6;
  const tree = renderer.create(<SectionTitle title={title} count={count} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders section title with no item count correct', () => {
  const title = 'Section Title';
  const count = null;
  const tree = renderer.create(<SectionTitle title={title} count={count} />).toJSON();
  expect(tree).toMatchSnapshot();
});
