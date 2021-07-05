import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function WeatherPage(props) {
  const { farms, fields, setCurrentPage } = props;

  function toggleFarmSelection(farmId) {
    console.log(`Farm #${farmId} selected=${farms[farmId].selected}`);
    farms[farmId].selected = !farms[farmId].selected;
  }

  const farmsElements = [];
  for (const farmId in farms) {
    useEffect(() => console.log(`Farm #${farmId} ${farms[farmId].attributes.description}`));
    farms[farmId].selected = false;
    farmsElements.push(
      <div key={farmId}>
        <button onClick={() => toggleFarmSelection(farmId)}>
          {(farms[farmId].selected ? 'v ' : '> ') + farms[farmId].attributes.description}
        </button>
      </div>
    );
  }

  useEffect(() => console.log(`First field: ${fields[Object.keys(fields)[0]].attributes.description}`));

  return (
    <div>
      <div>
        <span>Get Weather Data</span>
        <button onClick={() => setCurrentPage('')}>X</button>
      </div>
      <div>Farms and Fields</div>
      <div>{farmsElements}</div>
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
