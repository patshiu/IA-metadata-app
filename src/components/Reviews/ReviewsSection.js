import React from 'react';
import PropTypes from 'prop-types';

import SectionTitle from '../SectionTitle/SectionTitle';
import ReviewItem from './ReviewItem';

const ReviewsSection = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="row">
        <div className="section item-reviews">
          <SectionTitle title="Reviews" count={null} />
          <p>This item has no reviews.</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="section item-reviews">
          <SectionTitle title="Reviews" count={Object.keys(reviews).length} />
          {reviews.map((review, index) => (
            <ReviewItem key={review.review_id ? review.review_id : index} review={review} />
          ))}
        </div>
      </div>
    );
  }
};

ReviewsSection.propTypes = {
  reviews: PropTypes.array
};

export default ReviewsSection;
