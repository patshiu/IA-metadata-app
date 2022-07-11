import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import RelatedItemsSection from './RelatedItemsSection';

it('renders review section with no reviews correctly', () => {
  const relatedItems = [];
  const tree = renderer.create(<RelatedItemsSection relatedItems={relatedItems} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders review section with undefined reviews object correctly', () => {
  const relatedItems = undefined;
  const tree = renderer.create(<RelatedItemsSection relatedItems={relatedItems} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders related items section with several items correctly', () => {
  const relatedItems = [
    {
      _score: 20.881666,
      _type: '_doc',
      _id: 'ToTheFairB',
      _source: {
        description: [
          "Provides a trip to the New York World's Fair of 1965, showing the various activities at the fair."
        ],
        title: ['To The Fair (Pt 2)'],
        downloads: [14757],
        mediatype: ['movies'],
        collection: [
          'prelinger',
          'fav-rubyrichardson',
          'fav-okay_amad',
          'fav-edwardkildow',
          'fav-made42',
          'fav-chi_ly',
          'fav-annelovesspam',
          'fav-neovict',
          'fav-lsofmo',
          'fav-skg22',
          'fav-captainrotundo',
          'fav-agnes_czes',
          'fav-foolishblue',
          'fav-yolandia',
          'fav-palmettogirl',
          'fav-mirkaelina',
          'fav-telos_in_motion',
          'fav-barria',
          'fav-e_scott_pierce',
          'fav-mikegiannoni',
          'fav-peterttbb',
          'fav-lakislalakis',
          'fav-drewbus128',
          'fav-victorhelice',
          'fav-chrbir5',
          'fav-sgtremp',
          'fav-theorasmussen',
          'fav-shilgiah',
          'fav-rd1234',
          'fav-green_arrow_green_lantern',
          'fav-astral_void',
          'fav-n_black',
          'fav-lois487',
          'fav-man_roach',
          'fav-samantha_bahlmann',
          'fav-metrotoronto',
          'fav-applesquash',
          'fav-philly_walls',
          'fav-pessoptomist',
          'fav-kakojkjk',
          'fav-medicinebleu',
          'fav-mellydoll',
          'fav-acleneave',
          'fav-shelleydeluca',
          'fav-dixproject',
          'fav-david_silva',
          'fav-possibleproductions',
          'fav-shelbaby',
          'fav-headcharge',
          'fav-leriu',
          'fav-oorlab',
          'fav-bebbesarc',
          'fav-lady_in_blue',
          'fav-bellhead',
          'fav-rubyvermillion',
          'fav-eatraw',
          'fav-airstreamdriver',
          'fav-arcticbutterfly',
          'fav-misoom',
          'fav-a1moviestar'
        ],
        num_reviews: [7],
        subjectSorter: ['need keyword'],
        publicdate: ['2007-03-01T15:13:59Z']
      },
      _index: 'prod-i-006'
    },
    {
      _score: 20.881666,
      _type: '_doc',
      _id: 'reasons_why_1',
      _source: {
        description: [
          "Television manufacturing at RCA's New Jersey plant. Includes scenes of design, engineering and quality control. Great scenes of TVs with flickering test patterns."
        ],
        title: ['Reasons Why, The (Part I)'],
        downloads: [11844],
        mediatype: ['movies'],
        collection: [
          'prelinger',
          'fav-creaturefan',
          'fav-mustafa_a_bhagat',
          'fav-kliffee',
          'fav-losflanagan',
          'fav-erika_colby',
          'fav-deep_pockets',
          'fav-eighty_bug',
          'fav-mistercastro',
          'fav-slbenz',
          'fav-lebeau11',
          'fav-vicki68',
          'fav-graidenb',
          'fav-thegreenflyingkiwi',
          'fav-ksharter',
          'fav-cd_smith',
          'fav-ueb',
          'fav-martin_felsenfeld',
          'fav-circularvortex',
          'fav-nostalgistudio',
          'fav-hesher',
          'fav-phiftybuick',
          'fav-david_silva',
          'fav-super8',
          'fav-tatiara7',
          'fav-lobotomy_club',
          'fav-mellydoll',
          'fav-edwardkildow',
          'fav-jimimod',
          'fav-bob_rhubart',
          'fav-mheinrichskd0udi',
          'fav-kevinsummers',
          'fav-sethry',
          'fav-korcuska'
        ],
        num_reviews: [7],
        subjectSorter: ['need keyword'],
        publicdate: ['2003-05-27T12:02:35Z']
      },
      _index: 'prod-i-006'
    },
    {
      _score: 20.84214,
      _type: '_doc',
      _id: 'along_the_way',
      _source: {
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
      },
      _index: 'prod-i-006'
    }
  ];
  const tree = renderer
    .create(
      <Router>
        <RelatedItemsSection relatedItems={relatedItems} />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
