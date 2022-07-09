import React from 'react';
import PropTypes from 'prop-types';

const ItemDescription = ({ description }) => {
  return <div dangerouslySetInnerHTML={{ __html: description }} />;
};

ItemDescription.propTypes = {
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

export default ItemDescription;
