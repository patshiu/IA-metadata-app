import React from 'react';
import PropTypes from 'prop-types';

import SectionTitle from './SectionTitle';
import RelatedItem from './RelatedItem';

const RelatedItemsSection = ({ relatedItems, setItemIdentifier }) => {
  if (!relatedItems) {
    return (
      <div className="row">
        <div className="section">
          <SectionTitle title="Related Items" count={null} />
          <p>No related items.</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="section">
          <SectionTitle title="Related Items" count={relatedItems.length} />
          <div className="related-cards-container">
            {relatedItems.map((item, index) => {
              return (
                <RelatedItem
                  key={index}
                  itemSource={item._source}
                  itemIdentifier={item._id}
                  setItemIdentifier={setItemIdentifier}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

RelatedItemsSection.propTypes = {
  relatedItems: PropTypes.array,
  setItemIdentifier: PropTypes.func.isRequired
};

export default RelatedItemsSection;
