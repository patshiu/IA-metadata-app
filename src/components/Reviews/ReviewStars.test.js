import React from 'react';
import renderer from 'react-test-renderer';

import ReviewStars from './ReviewStars';

test('takes rating as string and renders review stars with aria description', () => {
  const reviewStars = '4';
  const tree = renderer.create(<ReviewStars reviewStars={reviewStars} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('if rating is undefined, renders nothing', () => {
  const reviewStars = undefined;
  const tree = renderer.create(<ReviewStars reviewStars={reviewStars} />).toJSON();
  expect(tree).toMatchSnapshot();
});
