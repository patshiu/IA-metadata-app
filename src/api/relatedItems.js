const fetchRelated = async (itemIdentifier, controller) => {
  const url = 'https://be-api.us.archive.org/mds/v1/get_related/all/' + itemIdentifier;
  return fetch(url, {
    signal: controller.signal,
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error('Failed to fetch related items.');
      }
    })
    .then((jsonRes) => {
      return jsonRes.hits.hits;
    })
    .catch((e) => {
      if (e.name === 'AbortError') {
        console.log('Request for related items cancelled.');
      } else {
        console.log('An error occurred while fetching related items:', e);
      }
    });
};

export default fetchRelated;
