import React from 'react';
import PropTypes from 'prop-types';

import './MediaEmbed.scss';

const MediaEmbed = ({ mediaType, itemIdentifier }) => {
  const hasEmbed = mediaTypeHasEmbed(mediaType);
  if (!hasEmbed) {
    return null;
  } else if (mediaType === 'audio' || mediaType === 'etree') {
    return (
      <div className="embed-container row">
        <div className="section">
          <iframe
            title={itemIdentifier}
            src={'https://archive.org/embed/' + itemIdentifier}
            height="60"
            width="100%"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen></iframe>
        </div>
      </div>
    );
  } else {
    return (
      <div className="embed-container row">
        <div className="section">
          <iframe
            title={itemIdentifier}
            src={'https://archive.org/embed/' + itemIdentifier}
            height="480"
            width="100%"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen></iframe>
        </div>
      </div>
    );
  }
};

MediaEmbed.propTypes = {
  mediaType: PropTypes.string.isRequired,
  itemIdentifier: PropTypes.string.isRequired
};

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

export default MediaEmbed;
