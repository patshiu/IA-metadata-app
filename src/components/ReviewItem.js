import React from 'react';
import PropTypes from 'prop-types';

const ReviewItem = ({ review }) => {
  return (
    <div>
      <h5>{review.reviewtitle}</h5>
      <h6>
        by {review.reviewer} on {review.reviewdate}
      </h6>
      <p>{review.reviewbody}</p>
      <p>stars: {review.stars}</p>
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
