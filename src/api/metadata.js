const fetchMetadata = async (itemIdentifier, controller) => {
  const url = 'https://archive.org/metadata/' + itemIdentifier;
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
        throw new Error('Failed to fetchh item metadata.');
      }
    })
    .then((jsonRes) => {
      return jsonRes;
    })
    .catch((e) => {
      if (e.name === 'AbortError') {
        console.log('Request for item metadata cancelled.');
      } else {
        console.log('An error occurred while fetching item metadata:', e);
      }
    });
};

export default fetchMetadata;
