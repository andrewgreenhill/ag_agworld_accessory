import React from 'react';
import PropTypes from 'prop-types';

function TopBar(props) {
  const { title, companyName, thumbURL, setCurrentPage } = props;
  return (
    <div>
      <img src="https://avatars0.githubusercontent.com/u/6791849?v=4" className="topBarIcon" />
      <span> {title} </span>
      <button onClick={() => setCurrentPage('weather')}> Weather </button>
      <span> {companyName} </span>
      <img src={thumbURL} className="topBarIcon" />
      <span>By Andrew Greenhill</span>
    </div>
  );
}

// Prop Type Validation:
TopBar.propTypes = {
  title: PropTypes.string,
  companyName: PropTypes.string,
  thumbURL: PropTypes.string,
  setCurrentPage: PropTypes.any,
};

export default TopBar;
