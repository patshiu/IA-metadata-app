import React from 'react';
import PropTypes from 'prop-types';

import ReviewItem from './ReviewItem';

const ReviewsSection = ({ reviews }) => {
  if (!reviews) {
    return (
      <div className="section item-reviews">
        <h3>Reviews</h3>
        <p>This item has no reviews.</p>
      </div>
    );
  } else {
    return (
      <div className="section item-reviews">
        <h3>Reviews ({Object.keys(reviews).length})</h3>
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
