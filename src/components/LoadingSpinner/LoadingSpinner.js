import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="row" data-testid="loading-spinner-element">
      <div className="section center">
        <span className="load large" role="presentation"></span>
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingSpinner;
