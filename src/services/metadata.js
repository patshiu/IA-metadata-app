import axios from 'axios';

const fetchMetadata = (itemIdentifier) => {
  const url = 'https://archive.org/metadata/' + itemIdentifier;
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((e) => console.log('An error occurred while fetching item metadata:', e));
};

export default fetchMetadata;
