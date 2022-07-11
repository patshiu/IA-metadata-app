import React from 'react';
import renderer from 'react-test-renderer';

import ReviewItem from './ReviewItem';

it('renders review card correctly', () => {
  const review = {
    review_id: '6536',
    reviewbody:
      "This short film was written, produced and directed by Charles and Rae Eames for the IBM Pavillion at the 1958 Brussels World's Fair. Animation by John Whitney. Music by Elmer Bernstein. Topic is the computer in the context of human development.  MUST VIEW!",
    reviewtitle: 'A gem from the Late 50s - Charles and Rae Eames',
    reviewer: 'Steve R',
    reviewdate: '2003-10-02 01:25:35',
    createdate: '2003-10-02 01:25:35',
    stars: '5'
  };
  const tree = renderer.create(<ReviewItem review={review} />).toJSON();
  expect(tree).toMatchSnapshot();
});
