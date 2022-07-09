import React from 'react';
import PropTypes from 'prop-types';

import SectionTitle from './SectionTitle';
import ReviewItem from './ReviewItem';

const ReviewsSection = ({ reviews }) => {
  if (!reviews) {
    return (
      <div className="item-reviews">
        <SectionTitle title="Reviews" count={null} />
        <p>This item has no reviews.</p>
      </div>
    );
  } else {
    return (
      <div className="item-reviews">
        <SectionTitle title="Reviews" count={Object.keys(reviews).length} />
        {reviews.map((review, index) => (
          <ReviewItem key={review.review_id ? review.review_id : index} review={review} />
        ))}
      </div>
    );
  }
};

ReviewsSection.propTypes = {
  reviews: PropTypes.array
};

export default ReviewsSection;
