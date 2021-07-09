import React, { useState } from 'react';
import PropTypes from 'prop-types';
import weatherStationData from '../utils/GetWeatherData';
import formatBOMtime from '../utils/TimeConvert';

function WeatherObservations(props) {
  const { field } = props;

  const [gotWeatherForStation, setGotWeatherForStation] = useState();
  const [stationName, setStationName] = useState('');
  const [observTime, setObservTime] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [windDirection, setWindDirection] = useState('');
  const [deltaT, setDeltaT] = useState('');
  const [temperature, setTemperature] = useState('');
  const [windGustSpeed, setWindGustSpeed] = useState('');
  const [humidity, setHumidity] = useState('');
  const [weatherConds, setWeatherConds] = useState('');

  if (gotWeatherForStation !== field.id) {
    // Clear the data
    setStationName('');
    setObservTime('');
    setWindSpeed('');
    setWindDirection('');
    setDeltaT('');
    setTemperature('');
    setWindGustSpeed('');
    setHumidity('');
    setWeatherConds('');
    // Dummy example data:
    // setStationName('Donnybrook');
    // setObservTime('2021-07-08 21:00');
    // setWindSpeed('15 km/h');
    // setWindDirection('NNW');
    // setDeltaT('9 °C');
    // setTemperature('25 °C');
    // setWindGustSpeed('28 km/h');
    // setHumidity('63 %');
    // setWeatherConds('');
    if (field.attributes.weatherStation) {
      // Request data from the weather service
      weatherStationData(field.attributes.weatherStation).then((weatherJSON) => {
        const observation = weatherJSON.observations.data[0];
        setStationName(observation.name);
        setObservTime(new Date(formatBOMtime(observation.local_date_time_full)));
        setWindSpeed(observation.wind_spd_kmh);
        setWindDirection(observation.wind_dir);
        setDeltaT(observation.delta_t);
        setTemperature(observation.air_temp);
        setWindGustSpeed(observation.gust_kmh);
        setHumidity(observation.rel_hum);
        setWeatherConds(observation.weather);
      });
    } else {
      setStationName('Not specified');
    }
    setGotWeatherForStation(field.id);
  }

  return (
    <>
      {field.attributes.description}
      <p></p>
      <div>
        <label htmlFor="WeatherStation" hidden className="QQQ">
          Weather Station
        </label>
        <input
          type="text"
          name="WeatherStation"
          readOnly
          value={field.attributes.weatherStation}
          className="QQQ"
          hidden
        ></input>
      </div>
      <div>
        <label htmlFor="StationName" className="QQQ">
          Station Name
        </label>
        <input type="text" name="StationName" readOnly value={stationName} className="QQQ"></input>
      </div>
      <div>
        <label htmlFor="ObservTime" className="QQQ">
          Observation time
        </label>
        <input type="text" name="ObservTime" readOnly value={observTime} className="QQQ"></input>
      </div>
      <div>
        <label htmlFor="WindSpeed" className="QQQ">
          Wind Speed
        </label>
        <input type="text" name="WindSpeed" readOnly value={windSpeed} className="QQQ"></input>
      </div>
      <div>
        <label htmlFor="WindDirection" className="QQQ">
          Wind Direction
        </label>
        <input type="text" name="WindDirection" readOnly value={windDirection} className="QQQ"></input>
      </div>
      <div>
        <label htmlFor="DeltaT" className="QQQ">
          Delta T
        </label>
        <input type="text" name="DeltaT" readOnly value={deltaT} className="QQQ"></input>
      </div>
      <div>
        <label htmlFor="Temperature" className="QQQ">
          Temperature
        </label>
        <input type="text" name="Temperature" readOnly value={temperature} className="QQQ"></input>
      </div>
      <div>
        <label htmlFor="WindGustSpeed" className="QQQ">
          Wind Gust Speed
        </label>
        <input type="text" name="WindGustSpeed" readOnly value={windGustSpeed} className="QQQ"></input>
      </div>
      <div>
        <label htmlFor="Humidity" className="QQQ">
          Humidity
        </label>
        <input type="text" name="Humidity" readOnly value={humidity} className="QQQ"></input>
      </div>
      <div>
        <label htmlFor="WeatherConditions" className="QQQ">
          Weather Conditions
        </label>
        <input type="text" name="WeatherConditions" readOnly value={weatherConds} className="QQQ"></input>
      </div>
    </>
  );
}

// Prop Type Validation:
WeatherObservations.propTypes = {
  field: PropTypes.any,
};

export default WeatherObservations;
