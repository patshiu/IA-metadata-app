import React from 'react';
import renderer from 'react-test-renderer';

import MetadataRow from './MetadataRow';

test('renders metadata row correcly with string input for description', () => {
  const label = 'subject';
  const description =
    "Futurism;World's Fairs: New York, 1939-40;Infrastructure: Roads and highways";
  const tree = renderer.create(<MetadataRow label={label} description={description} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders metadata row correcly with array input for description', () => {
  const label = 'subject';
  const description = [
    'Futurism',
    "World's Fairs: New York",
    '1939-40',
    'Infrastructure: Roads and highways'
  ];
  const tree = renderer.create(<MetadataRow label={label} description={description} />).toJSON();
  expect(tree).toMatchSnapshot();
});
