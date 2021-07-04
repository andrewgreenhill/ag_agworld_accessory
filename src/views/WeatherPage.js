import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function WeatherPage(props) {
  const { farms, fields, setCurrentPage } = props;

  function toggleFarmSelection(farmId) {
    console.log(farmId);
    console.log(`First farm: ${farms[0].selected}`);
    farms[1].selected = !farms[1].selected;
  }

  const farmsElements = farms.map((farm) => {
    useEffect(() => console.log(`Farm #${farm.id} ${farm.attributes.description}`), [farm.id]);
    farm.selected = false;
    return (
      <div key={farm.id}>
        <button onClick={() => toggleFarmSelection(farm.id)}>
          {(farm.selected ? 'v ' : '> ') + farm.attributes.description}
        </button>
      </div>
    );
  });

  useEffect(() => console.log(`First field: ${fields[0].attributes.description}`), [fields[0]]);

  return (
    <div>
      <div>
        <span>Farms and Fields</span>
        <button onClick={() => setCurrentPage('')}>X</button>
      </div>
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
