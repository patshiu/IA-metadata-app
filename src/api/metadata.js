import axios from 'axios';

const fetchMetadata = (itemIdentifier, controller) => {
  const url = 'https://archive.org/metadata/' + itemIdentifier;
  return axios
    .get(url, { signal: controller.signal })
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else {
        throw new Error('Failed to fetch item metadata.');
      }
    })
    .catch((e) => {
      if (axios.isCancel(e)) {
        console.log('Request for item metadata cancelled.');
      } else {
        console.log('An error occurred while fetching item metadata:', e);
      }
    });
};

export default fetchMetadata;
