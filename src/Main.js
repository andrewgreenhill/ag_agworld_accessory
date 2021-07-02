import React from 'react';
import PropTypes from 'prop-types';

function Main(props) {
  const { userName, thumbURL } = props;
  return (
    <div>
      <p>{userName}</p>
      <img src={thumbURL} />
    </div>
  );
}

Main.propTypes = {
  thumbURL: PropTypes.string,
  userName: PropTypes.string,
};

export default Main;
