const request = require('request');

const geocode = (address, callback) => {
  const message = '';
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?limit=1&access_token=pk.eyJ1IjoibW90aWVsbWFraWVzIiwiYSI6ImNrZ3BtYXoyZDBybHUzOG1vemVxdnNtNGEifQ.Fn6UHPIlYa19lQKvmfX11w`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services', undefined);
    } else if (response.body.message) {
      callback(response.body.message, undefined);
    } else {
      const data = response.body.features[0];
      const latitude = data.center[1];
      const longitude = data.center[0];
      callback(undefined, { latitude, longitude });
    }
  });
};

module.exports = { geocode: geocode };
