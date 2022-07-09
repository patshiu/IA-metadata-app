import PropTypes from 'prop-types';

const ReviewStars = ({ reviewStars }) => {
  if (reviewStars) {
    const numStars = Number(reviewStars);
    let starsIcon = '☆☆☆☆☆';
    for (let i = 0; i < numStars; i++) {
      starsIcon = '★' + starsIcon;
      starsIcon = starsIcon.slice(0, 5);
    }

    return <>{starsIcon}</>;
  } else {
    return null;
  }
};

ReviewStars.propTypes = {
  reviewStars: PropTypes.string
};

export default ReviewStars;
