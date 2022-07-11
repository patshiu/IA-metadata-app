import React from 'react';
import renderer from 'react-test-renderer';

import ItemKeyInfo from './ItemKeyInfo';

it('renders item key info correctly', () => {
  const description =
    '<h2>This a description of an item.</h2> <p>It may contain <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#">html</a>.</p>';
  const title = 'This Is An Item Title';
  const tree = renderer.create(<ItemKeyInfo title={title} description={description} />).toJSON();
  expect(tree).toMatchSnapshot();
});
