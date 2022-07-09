import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from './SectionTitle';
import MetadataItem from './MetadataItem';

import './MetadataFullList.scss';

const MetadataFullList = ({ metadata }) => {
  return (
    <div className="row">
      <div className="item-metadata-full-list section padded">
        <SectionTitle title="Full Metadata" count={Object.keys(metadata).length} />

        {Object.keys(metadata).map((key) => {
          return <MetadataItem key={key} label={key} description={metadata[key]} />;
        })}
      </div>
    </div>
  );
};

MetadataFullList.propTypes = {
  metadata: PropTypes.object
};

export default MetadataFullList;
