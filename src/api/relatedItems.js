import axios from 'axios';

const fetchRelated = (itemIdentifier, controller) => {
  const url = 'https://be-api.us.archive.org/mds/v1/get_related/all/' + itemIdentifier;
  return axios
    .get(url, { signal: controller.signal })
    .then((res) => {
      if (res.status === 200) {
        return res.data.hits.hits;
      } else {
        throw new Error('Failed to fetch related items');
      }
    })
    .catch((e) => {
      if (axios.isCancel(e)) {
        console.log('Request for related items cancelled.');
      } else {
        console.log('An error occurred while fetching related items:', e);
      }
    });
};

export default fetchRelated;
