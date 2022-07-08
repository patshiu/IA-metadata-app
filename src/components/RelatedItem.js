import React from 'react';
import PropTypes from 'prop-types';
import './RelatedItem.scss';

const RelatedItem = ({ itemSource, itemIdentifier }) => {
  return (
    <div className="related-item-card-container col-1-3 padded">
      <div className="related-item-card">
        <img src={'https://archive.org/services/img/' + itemIdentifier} className="card-hero" />
        <div className="card-content">
          <h3>{itemSource.title}</h3>
          <p>Media type: {itemSource.mediatype}</p>
          <p>{itemSource.description ? itemSource.description : ''}</p>
        </div>
      </div>
    </div>
  );
};

RelatedItem.propTypes = {
  itemSource: PropTypes.shape({
    title: PropTypes.string.isRequired,
    mediatype: PropTypes.string.isRequired,
    description: PropTypes.string
  }),
  itemIdentifier: PropTypes.string.isRequired
};

export default RelatedItem;
