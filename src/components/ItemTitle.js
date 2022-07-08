import React from 'react';
import PropTypes from 'prop-types';

const ItemTitle = ({ title }) => {
  return <h1>{title}</h1>;
};

ItemTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default ItemTitle;
