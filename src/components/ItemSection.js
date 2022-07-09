import React from 'react';
import PropTypes from 'prop-types';
import MediaEmbed from './MediaEmbed';
import ItemKeyInfo from './ItemKeyInfo';
import MetadataSection from './MetadataSection';
import ReviewsSection from './ReviewsSection';
import RelatedItemsSection from './RelatedItemsSection';

const ItemSection = ({ itemIdentifier, itemMetadata, itemRelatedItems }) => {
  return (
    <>
      <MediaEmbed mediaType={itemMetadata.metadata.mediatype} itemIdentifier={itemIdentifier} />

      <div className="row">
        <ItemKeyInfo
          title={itemMetadata.metadata.title}
          description={itemMetadata.metadata.description}
        />
        <MetadataSection metadata={itemMetadata.metadata} />
        <ReviewsSection reviews={itemMetadata.reviews} />
        <RelatedItemsSection relatedItems={itemRelatedItems} />
      </div>
    </>
  );
};

ItemSection.propTypes = {
  itemIdentifier: PropTypes.string.isRequired,
  itemMetadata: PropTypes.object.isRequired,
  itemRelatedItems: PropTypes.array.isRequired
};

export default ItemSection;
