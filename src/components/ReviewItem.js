import React from 'react';
import PropTypes from 'prop-types';

import './ReviewItem.scss';

const ReviewItem = ({ review }) => {
  const numStars = Number(review.stars);
  let starsIcon = '☆☆☆☆☆';
  for (let i = 0; i < numStars; i++) {
    starsIcon = '★' + starsIcon;
    starsIcon = starsIcon.slice(0, 5);
  }

  return (
    <div className="review-item">
      <h2>{review.reviewtitle}</h2>
      <h5>
        {starsIcon} by {review.reviewer} on {review.reviewdate}
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
