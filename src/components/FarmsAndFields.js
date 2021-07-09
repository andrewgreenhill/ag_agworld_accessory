import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FarmsAndFields(props) {
  const { farms, fields, setWeatherForField } = props;
  const [farmExpanded, setFarmExpanded] = useState({}); // Track which farms are expanded

  // Create a structure to make it easier & more efficient to use the fields of each farm:
  const farmFields = {};
  Object.keys(farms).forEach((farmId) => {
    farmFields[farmId] = [];
  });
  for (const fieldId in fields) {
    farmFields[fields[fieldId].attributes.farm_id].push(fields[fieldId]);
  }

  // Create a boolean in farmExpanded for each field.
  // It's a bit tricky to update useState object properties:
  let updateFarmExpanded = false;
  let setFarmExpandedNew = { ...farmExpanded };
  for (const farmId in farms) {
    if (setFarmExpandedNew[farmId] === undefined) {
      setFarmExpandedNew[farmId] = false;
      updateFarmExpanded = true;
    }
  }
  if (updateFarmExpanded) setFarmExpanded({ ...setFarmExpandedNew });

  // Create a button for each farm, and if the farm is 'expanded' then also list its fields
  const farmsElements = [];
  for (const farmId in farms) {
    farmsElements.push(<div key={farmId}>{farmAndFields(farmId)}</div>);
  }

  // A function that creates farm and field buttons:
  function farmAndFields(farmId) {
    function toggleFarmExpansion(farmId) {
      let setFarmExpandedNew = { ...farmExpanded };
      setFarmExpandedNew[farmId] = !setFarmExpandedNew[farmId];
      setFarmExpanded({ ...setFarmExpandedNew });
      setWeatherForField();
    }

    // Farm button
    const farm = (
      <>
        <button onClick={() => toggleFarmExpansion(farmId)}>
          {(farmExpanded[farmId] ? '˅ ' : '˃ ') + farms[farmId].attributes.description}
        </button>
      </>
    );

    if (!farmExpanded[farmId]) return farm;

    // Field buttons
    let fieldList = farmFields[farmId].map((field) => {
      return (
        <div key={field.id}>
          <button
            onClick={() => {
              setWeatherForField(field.id);
            }}
          >
            {field.attributes.description}
          </button>
        </div>
      );
    });

    return (
      <>
        {farm}
        {fieldList.length > 0 ? <div>{fieldList}</div> : <div>No fields</div>}
      </>
    );
  }

  return <div>{farmsElements}</div>;
}

// Prop Type Validation:
FarmsAndFields.propTypes = {
  farms: PropTypes.any,
  fields: PropTypes.any,
  setWeatherForField: PropTypes.any,
};

export default FarmsAndFields;
