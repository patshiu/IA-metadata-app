import React from 'react';
import renderer from 'react-test-renderer';

import ReviewsSection from './ReviewsSection';

it('renders review section with no reviews correctly', () => {
  const reviews = [];
  const tree = renderer.create(<ReviewsSection reviews={reviews} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders review section with undefined reviews object correctly', () => {
  const reviews = undefined;
  const tree = renderer.create(<ReviewsSection reviews={reviews} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders review section with several reviews correctly', () => {
  const reviews = [
    {
      review_id: '6198',
      reviewbody:
        "Wonderfully trippy little cartoon on the function of computers. The color's a little muddy, but it explains the use of computers--in the service of man, not its master--as a tool for the control of information and work, design, and for simulating reality.\n\nNot sure what need this short really fulfills, but it's fun (kinda like a Fractured Fairytale-style), doesn't pander, and doesn't panic.",
      reviewtitle: 'If I only had a heart',
      reviewer: 'dynayellow',
      reviewdate: '2003-09-15 15:54:20',
      createdate: '2003-09-15 15:54:20',
      stars: '3'
    },
    {
      review_id: '6536',
      reviewbody:
        "This short film was written, produced and directed by Charles and Rae Eames for the IBM Pavillion at the 1958 Brussels World's Fair. Animation by John Whitney. Music by Elmer Bernstein. Topic is the computer in the context of human development.  MUST VIEW!",
      reviewtitle: 'A gem from the Late 50s - Charles and Rae Eames',
      reviewer: 'Steve R',
      reviewdate: '2003-10-02 01:25:35',
      createdate: '2003-10-02 01:25:35',
      stars: '5'
    },
    {
      review_id: '7226',
      reviewbody:
        "I'm not the biggest fan of the Eames' work. For some odd reason, I find they're animated stories stiff and too formal. In the case of The Information Machine, it's a cartoon about computers told somewhat straight forward as the Eames can tell it. The animation isn't all THAT great, one thing that does save it is the score by Elmer Bernstein.",
      reviewtitle: 'Animation for scientists',
      reviewer: 'Spuzz',
      reviewdate: '2003-11-07 16:42:10',
      createdate: '2003-11-07 16:42:10',
      stars: '3'
    }
  ];
  const tree = renderer.create(<ReviewsSection reviews={reviews} />).toJSON();
  expect(tree).toMatchSnapshot();
});
