import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './RelatedItem.scss';

const RelatedItem = ({ itemSource, itemIdentifier, setItemIdentifier }) => {
  return (
    <div className="related-item-card-container col-1-3 padded">
      <div className="related-item-card">
        <img src={'https://archive.org/services/img/' + itemIdentifier} className="card-hero" />
        <div className="card-content">
          <h3>
            <NavLink
              to={'/' + itemIdentifier}
              onClick={() => {
                setItemIdentifier(itemIdentifier);
              }}>
              {itemSource.title}
            </NavLink>
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
  itemIdentifier: PropTypes.string.isRequired,
  setItemIdentifier: PropTypes.func.isRequired
};

export default RelatedItem;
