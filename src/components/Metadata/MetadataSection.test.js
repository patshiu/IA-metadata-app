import React from 'react';
import renderer from 'react-test-renderer';

import MetadataSection from './MetadataSection';

it('renders item metadata correctly', () => {
  const metadata = {
    mediatype: 'movies',
    identifier: 'InformationM',
    publisher: 'Eames (Charles And Ray)',
    description:
      "Applies graphic sensitivity to medium in cartoon form, and traces the history of storing and analyzing information from the days of the cavemen to today's age of electronic brains.",
    date: '1958',
    licenseurl: 'http://creativecommons.org/licenses/publicdomain/',
    color: 'color',
    sound: 'sound',
    collection: 'prelinger',
    title: 'Information Machine, The',
    sponsor: 'IBM',
    pick: '0',
    runtime: '00:09:44',
    updatedate: '2005-01-13 09:36:44',
    updater: 'AV Geek Skip',
    subject: 'need keyword',
    numeric_id: '3254',
    type: 'MovingImage',
    proddate: '1958',
    collectionid: 'InformationM',
    publicdate: '2007-03-01 10:46:58',
    backup_location: 'ia903600_31',
    closed_captioning: 'no',
    addeddate: '2007-03-01 10:46:58'
  };
  const tree = renderer.create(<MetadataSection metadata={metadata} />).toJSON();
  expect(tree).toMatchSnapshot();
});
