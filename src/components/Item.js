import React from 'react';
import PropTypes from 'prop-types';
import MediaEmbed from './MediaEmbed/MediaEmbed';
import ItemKeyInfo from './ItemKeyInfo/ItemKeyInfo';
import MetadataSection from './Metadata/MetadataSection';
import ReviewsSection from './Reviews/ReviewsSection';
import RelatedItemsSection from './RelatedItems/RelatedItemsSection';

const Item = ({ itemIdentifier, itemMetadata, itemRelatedItems }) => {
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

Item.propTypes = {
  itemIdentifier: PropTypes.string.isRequired,
  itemMetadata: PropTypes.object.isRequired,
  itemRelatedItems: PropTypes.array.isRequired
};

export default Item;
