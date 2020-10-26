const request = require('request');

const forecast = (city, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=2fa976f7cbd583126c5f1c4dafb17713&query=${encodeURIComponent(
    city
  )}&unites=m`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('error', undefined);
    } else if (response.body.error) {
      callback(response.body.error);
    } else {
      const data = response.body.current;
      callback(undefined, {
        message: `it is currently ${data.temperature} degress out. It feels like ${data.feelslike} degress out.`,
        description: `weather_descriptions: ${data.weather_descriptions[0]}`,
      });
    }
  });
};

module.exports = { forecast };
