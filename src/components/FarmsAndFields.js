import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function FarmsAndFields(props) {
  const { farms, fields } = props;
  const [farmSelected, setFarmSelected] = useState({});
  const farmsElements = [];

  function toggleFarmSelection(farmId) {
    console.log(`Farm #${farmId} selected=${farmSelected[farmId]}`);
    let sfsNew = { ...farmSelected };
    sfsNew[farmId] = !sfsNew[farmId];
    setFarmSelected({ ...sfsNew });
  }

  let updateFarmSelected = false;
  let sfsNew = { ...farmSelected };
  for (const farmId in farms) {
    if (sfsNew[farmId] === undefined) {
      sfsNew[farmId] = false;
      updateFarmSelected = true;
    }
  }
  if (updateFarmSelected) setFarmSelected({ ...sfsNew });

  for (const farmId in farms) {
    farmsElements.push(
      <div key={farmId}>
        <button onClick={() => toggleFarmSelection(farmId)}>
          {(farmSelected[farmId] ? '˅ ' : '˃ ') + farms[farmId].attributes.description}
        </button>
      </div>
    );
  }

  useEffect(() => console.log(`First field: ${Object.values(fields)[0].attributes.description}`));

  return <div>{farmsElements}</div>;
}

// Prop Type Validation:
FarmsAndFields.propTypes = {
  farms: PropTypes.any,
  fields: PropTypes.any,
};

export default FarmsAndFields;
