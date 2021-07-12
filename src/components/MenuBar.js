import React from 'react';
import PropTypes from 'prop-types';

function MenuBar(props) {
  const { setCurrentPage } = props;
  return (
    <div>
      <button className="buttonWeather" onClick={() => setCurrentPage('weather')}>
        {' '}
        Weather{' '}
      </button>
    </div>
  );
}

// Prop Type Validation:
MenuBar.propTypes = {
  setCurrentPage: PropTypes.any,
};

export default MenuBar;
