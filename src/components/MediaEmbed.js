import React from 'react';
import PropTypes from 'prop-types';

import MediaEmbediFrame from './MediaEmbediFrame';

import './MediaEmbed.scss';

const MediaEmbed = ({ mediaType, itemIdentifier }) => {
  const hasEmbed = mediaTypeHasEmbed(mediaType);
  if (!hasEmbed) {
    return null;
  } else if (mediaType === 'audio' || mediaType === 'etree') {
    return <MediaEmbediFrame itemIdentifier={itemIdentifier} height={60} />;
  } else {
    return <MediaEmbediFrame itemIdentifier={itemIdentifier} />;
  }
};

MediaEmbed.propTypes = {
  mediaType: PropTypes.string.isRequired,
  itemIdentifier: PropTypes.string.isRequired
};

const mediaTypeHasEmbed = (mediaType) => {
  switch (mediaType) {
    case 'texts':
    case 'etree':
    case 'audio':
    case 'movies':
    case 'software':
    case 'image':
      return true;

    case 'data':
    case 'web':
    case 'collection':
    case 'account':
    default:
      return false;
  }
};

export default MediaEmbed;
