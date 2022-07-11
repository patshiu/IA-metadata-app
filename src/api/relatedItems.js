const fetchRelated = async (itemIdentifier, controller) => {
  const url = 'https://be-api.us.archive.org/mds/v1/get_related/all/' + itemIdentifier;

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    if (res.status === 200) {
      const resJson = await res.json();
      return resJson.hits.hits;
    } else {
      throw new Error('Failed to fetch related items.');
    }
  } catch (e) {
    if (e.name === 'AbortError') {
      console.log('Request for related items cancelled.');
    } else {
      console.log('An error occurred while fetching related items:', e);
    }
  }
};

export default fetchRelated;
