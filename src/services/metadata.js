import axios from 'axios';

const fetchMetadata = (itemIdentifier, controller) => {
  const url = 'https://archive.org/metadata/' + itemIdentifier;
  return axios
    .get(url, { signal: controller.signal })
    .then((res) => res.data)
    .catch((e) => console.log('An error occurred while fetching item metadata:', e));
};

export default fetchMetadata;
