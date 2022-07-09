import React from 'react';
import PropTypes from 'prop-types';

const ItemNotFound = ({ itemIdentifier }) => {
  return (
    <div className="row center">
      <h1>Unable to find the item &apos;{itemIdentifier}&apos;.</h1>
    </div>
  );
};

ItemNotFound.propTypes = {
  itemIdentifier: PropTypes.string.isRequired
};

export default ItemNotFound;
