import React from 'react';
import PropTypes from 'prop-types';

function TopBar(props) {
  const { title, companyName, thumbURL } = props;
  return (
    <div className="TopBarBox">
      <img src="https://avatars0.githubusercontent.com/u/6791849?v=4" className="topBarIcon" />
      <span className="topBarTitle"> {title} </span>
      <span className="topBarCompanyName"> {companyName} </span>
      <img src={thumbURL} className="avatar" />
      <span className="topBarCredit">By Andrew Greenhill</span>
    </div>
  );
}

// Prop Type Validation:
TopBar.propTypes = {
  title: PropTypes.string,
  companyName: PropTypes.string,
  thumbURL: PropTypes.string,
};

export default TopBar;
