import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './RelatedItem.scss';
import ItemTitle from './ItemTitle';

const RelatedItem = ({ itemSource, itemIdentifier }) => {
  return (
    <div className="related-item-card-container col-1-3 padded">
      <div className="related-item-card">
        <img
          src={'https://archive.org/services/img/' + itemIdentifier}
          className="card-hero"
          alt-text={'thumbnail for ' + ItemTitle}
        />
        <div className="card-content">
          <h3>
            <Link to={'/' + itemIdentifier}>{itemSource.title}</Link>
          </h3>
          <p>Media type: {itemSource.mediatype}</p>
          <p>{itemSource.description ? itemSource.description : ''}</p>
        </div>
      </div>
    </div>
  );
};

RelatedItem.propTypes = {
  itemSource: PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    mediatype: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  }),
  itemIdentifier: PropTypes.string.isRequired
};

export default RelatedItem;
