import React from 'react';
import PropTypes from 'prop-types';

import ItemTitle from './ItemTitle';
import ItemDescription from './ItemDescription';

const ItemKeyInfo = ({ title, description }) => {
  return (
    <div className="row">
      <div className="section">
        <ItemTitle title={title} />
        <ItemDescription description={description} />
      </div>
    </div>
  );
};

ItemKeyInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default ItemKeyInfo;
