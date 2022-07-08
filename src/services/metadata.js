import axios from 'axios';

const fetch = (itemIdentifier) => {
  const url = 'https://archive.org/metadata/' + itemIdentifier;
  console.log('url is: ', url);
  return axios.get(url);
};

export default { fetch };
