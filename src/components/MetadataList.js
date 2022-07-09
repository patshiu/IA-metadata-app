import React from 'react';
import PropTypes from 'prop-types';
import MetadataRow from './MetadataRow';

import './MetadataList.scss';

const MetadataList = ({ metadata }) => {
  return (
    <dl>
      {Object.keys(metadata).map((key) => {
        return <MetadataRow key={key} label={key} description={metadata[key]} />;
      })}
    </dl>
  );
};

MetadataList.propTypes = {
  metadata: PropTypes.object
};

export default MetadataList;
