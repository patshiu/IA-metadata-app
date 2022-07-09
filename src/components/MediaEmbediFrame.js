import React from 'react';
import PropTypes from 'prop-types';

const MediaEmbediFrame = ({ itemIdentifier, height }) => {
  return (
    <div className="embed-container row">
      <div className="section">
        <iframe
          title={itemIdentifier}
          src={'https://archive.org/embed/' + itemIdentifier}
          height={height ? height : 480}
          width="100%"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

MediaEmbediFrame.propTypes = {
  itemIdentifier: PropTypes.string.isRequired,
  height: PropTypes.number
};

export default MediaEmbediFrame;
