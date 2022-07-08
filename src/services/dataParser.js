const mediaTypeHasEmbed = (mediaType) => {
  switch (mediaType) {
    case 'texts':
      return true;

    case 'etree':
      return true;

    case 'audio':
      return true;

    case 'movies':
      return true;

    case 'software':
      return true;

    case 'image':
      return true;

    case 'data':
      return false;

    case 'web':
      return false;

    case 'collection':
      return false;

    case 'account':
      return false;

    default:
      return false;
  }
};

export default { mediaTypeHasEmbed };
