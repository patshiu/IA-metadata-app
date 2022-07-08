import React from 'react';
import PropTypes from 'prop-types';

const ItemDescription = ({ description }) => {
  return <div dangerouslySetInnerHTML={{ __html: description }} />;
};

ItemDescription.propTypes = {
  description: PropTypes.string
};

export default ItemDescription;
