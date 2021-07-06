import React from 'react';
import FarmsAndFields from '../components/FarmsAndFields';
import PropTypes from 'prop-types';

function WeatherPage(props) {
  const { farms, fields, setCurrentPage } = props;

  return (
    <div>
      <div>
        <span>Get Weather Data</span>
        <button onClick={() => setCurrentPage('')}>X</button>
      </div>
      <div>Farms and Fields</div>
      <FarmsAndFields farms={farms} fields={fields} />
    </div>
  );
}

// Prop Type Validation:
WeatherPage.propTypes = {
  farms: PropTypes.any,
  fields: PropTypes.any,
  setCurrentPage: PropTypes.any,
};

export default WeatherPage;
