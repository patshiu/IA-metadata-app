import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle';
import MetadataList from './MetadataList';

import './MetadataSection.scss';

const MetadataSection = ({ metadata }) => {
  return (
    <div className="row">
      <div className="item-metadata-full-list section padded">
        <SectionTitle title="Full Metadata" count={Object.keys(metadata).length} />
        <MetadataList metadata={metadata} />
      </div>
    </div>
  );
};

MetadataSection.propTypes = {
  metadata: PropTypes.object
};

export default MetadataSection;
