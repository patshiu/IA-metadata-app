import React from 'react';
import PropTypes from 'prop-types';

const MediaEmbed = ({ hasEmbed, itemIdentifier }) => {
  if (!hasEmbed) {
    return null;
  } else {
    return (
      <div className="row">
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
  hasEmbed: PropTypes.bool.isRequired,
  itemIdentifier: PropTypes.string.isRequired
};

export default MediaEmbed;
