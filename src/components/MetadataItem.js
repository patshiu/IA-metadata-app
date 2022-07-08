import React from 'react';
import PropTypes from 'prop-types';

import './MetadataItem.scss';

const MetadataItem = ({ label, description }) => {
  if (Array.isArray({ description })) {
    return (
      <div>
        <dl>
          <dt>{label}</dt>
          <dd>TODO: Someone needs to implement showing arrays.</dd>
        </dl>
      </div>
    );
  } else {
    return (
      <div>
        <dl>
          <dt>{label}</dt>
          <dd>{description}</dd>
        </dl>
      </div>
    );
  }
};

MetadataItem.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default MetadataItem;
