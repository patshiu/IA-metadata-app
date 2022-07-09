import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ title, count }) => {
  return (
    <h2>
      {title} {count ? '(' + count + ')' : ''}
    </h2>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number
};

export default SectionTitle;
