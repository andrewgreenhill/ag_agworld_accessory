const ca_proxy = 'http://127.0.0.1:8080/';

export function weatherStationData(station) {
  // station is expected to be a string like "IDW60801/IDW60801.95622"

  // See http://www.bom.gov.au/catalogue/data-feeds.shtml#obs-ind for stations
  // and http://www.bom.gov.au/fwo/IDW60901/IDW60901.94608.json for example JSON

  // An alternative approach could be to use www.npmjs.com/package/weather-au-api

  return fetch(ca_proxy + 'http://www.bom.gov.au/fwo/' + station + '.json', {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache',
      'User-Agent': 'andrewgggg',
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Upgrade-Insecure-Requests': '1',
    },
  }).then((response) => response.json());
}

// eslint-disable-next-line no-unused-vars
function testGettingWeatherData() {
  weatherStationData('IDW60801/IDW60801.95622').then((weatherJSON) => {
    const observation = weatherJSON.observations.data[0];
    console.log(`${observation.name}: ${observation.weather}`);
  });
}

// testGettingWeatherData();

export default weatherStationData;
