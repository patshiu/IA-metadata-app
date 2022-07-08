import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ title, count }) => {
  if (count) {
    return (
      <h1>
        {title} ({count})
      </h1>
    );
  } else {
    return <h1>{title}</h1>;
  }
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number
};

export default SectionTitle;
