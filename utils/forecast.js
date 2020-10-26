const request = require('request');

const forecast = (city, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=2fa976f7cbd583126c5f1c4dafb17713&query=${encodeURIComponent(
    city
  )}&unites=m`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('error', undefined);
    } else if (body.error) {
      callback(body.error);
    } else {
      const { temperature, feelslike, weather_descriptions } = body.current;
      callback(undefined, {
        message: `it is currently ${temperature} degress out. It feels like ${feelslike} degress out.`,
        description: `weather_descriptions: ${weather_descriptions[0]}`,
      });
    }
  });
};

module.exports = { forecast };
