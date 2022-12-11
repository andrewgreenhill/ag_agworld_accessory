import React, { useState } from 'react';
import FarmsAndFields from '../components/FarmsAndFields';
import WeatherObservations from '../components/WeatherObservations';
import PropTypes from 'prop-types';

function WeatherPage(props) {
  const { farms, fields, setCurrentPage, companyName } = props;
  const [weatherForField, setWeatherForField] = useState();
  const [waitingForRequest, setWaitingForRequest] = useState();

  return (
    <>
      <div>
        <span className="GetWeatherData">Get Weather Data</span>
        <button className="GetWeatherDataX" onClick={() => setCurrentPage('')}>
          X
        </button>
      </div>
      <div>
        <span className="WeatherFarmsFields">
          <span>{companyName}</span>
          <p></p>
          <FarmsAndFields farms={farms} fields={fields} setWeatherForField={setWeatherForField} />
        </span>
        <span className="WeatherObservation">
          <div>Weather Observation</div>
          {weatherForField ? (
            <WeatherObservations field={fields[weatherForField]} setWaitingForRequest={setWaitingForRequest} />
          ) : (
            ''
          )}
          {waitingForRequest ? <p>Getting weather data...</p> : <></>}
        </span>
      </div>
    </>
  );
}

// Prop Type Validation:
WeatherPage.propTypes = {
  farms: PropTypes.any,
  fields: PropTypes.any,
  setCurrentPage: PropTypes.any,
  companyName: PropTypes.string,
};

export default WeatherPage;
