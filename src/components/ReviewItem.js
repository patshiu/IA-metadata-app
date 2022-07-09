import React from 'react';
import PropTypes from 'prop-types';
import ReviewStars from './ReviewStars';

import './ReviewItem.scss';

const ReviewItem = ({ review }) => {
  return (
    <div className="review-item">
      <h2>{review.reviewtitle}</h2>
      <h5>
        <ReviewStars reviewStars={review.stars} /> by {review.reviewer} on {review.reviewdate}
      </h5>
      <p>{review.reviewbody}</p>
    </div>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    reviewtitle: PropTypes.string,
    reviewer: PropTypes.string,
    reviewdate: PropTypes.string,
    reviewbody: PropTypes.string,
    stars: PropTypes.string
  }).isRequired
};

export default ReviewItem;
