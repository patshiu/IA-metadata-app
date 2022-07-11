import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import RelatedItem from './RelatedItem';

it('renders related item card correctly', () => {
  const itemSource = {
    creatorSorter: ['levene (carol)'],
    description: [
      'Depicts actual construction progress throughout the San Francisco Bay Area Rapid Transit System during 1967-68, emphasizing the original and continuing aims of the district--to provide safe, fast, economical and comfortable mass transit, thereby eliminating traffic congestion and preserving the beauty and character of the area.'
    ],
    title: ['Along the Way'],
    downloads: [7755],
    mediatype: ['movies'],
    collection: [
      'prelinger',
      'fav-david_silva',
      'fav-davykurlander',
      'fav-thomas_lopez794',
      'fav-breudd',
      'fav-meateye',
      'fav-smardzz',
      'fav-fruitiebat',
      'fav-project_greenpark',
      'fav-foolishblue',
      'fav-jordi_mumma',
      'fav-xeconya',
      'fav-thevelvetundergrad',
      'fav-thegreenflyingkiwi',
      'fav-chriscousin',
      'fav-margaret_b_1',
      'fav-iowatvman',
      'fav-blake_rand'
    ],
    num_reviews: [4],
    subjectSorter: ['need keyword'],
    publicdate: ['2003-05-16T10:39:21Z']
  };
  const itemIdentifier = 'along_the_way';
  const tree = renderer
    .create(
      <Router>
        <RelatedItem itemSource={itemSource} itemIdentifier={itemIdentifier} />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
