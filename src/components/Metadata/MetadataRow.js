import React from 'react';
import PropTypes from 'prop-types';
import './MetadataRow.scss';

const MetadataRow = ({ label, description }) => {
  if (Array.isArray(description)) {
    let parsedDescription = '';
    for (let item of description) {
      parsedDescription += ', ' + item;
    }
    description = parsedDescription.slice(1);
    console.log('description parsed');
  }
  return (
    <div>
      <dt>{label}</dt>
      <dd>{description}</dd>
    </div>
  );
};

MetadataRow.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])
};

export default MetadataRow;
