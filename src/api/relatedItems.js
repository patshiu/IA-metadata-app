import axios from 'axios';

const fetchRelated = (itemIdentifier, controller) => {
  const url = 'https://be-api.us.archive.org/mds/v1/get_related/all/' + itemIdentifier;
  return axios
    .get(url, { signal: controller.signal })
    .then((res) => res.data.hits.hits)
    .catch((e) => console.log('An error occurred while fetching related item:', e));
};

export default fetchRelated;
