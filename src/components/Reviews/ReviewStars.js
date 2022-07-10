import PropTypes from 'prop-types';

const ReviewStars = ({ reviewStars }) => {
  if (reviewStars) {
    const numStars = Number(reviewStars);
    let starsIcon = '☆☆☆☆☆';
    for (let i = 0; i < numStars; i++) {
      starsIcon = '★' + starsIcon;
      starsIcon = starsIcon.slice(0, 5);
    }
    const aria = 'Rating: ' + reviewStars + ' of 5 stars';
    return <div aria-description={aria}>{starsIcon}</div>;
  } else {
    return null;
  }
};

ReviewStars.propTypes = {
  reviewStars: PropTypes.string
};

export default ReviewStars;
