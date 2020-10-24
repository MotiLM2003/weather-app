const request = require('request');
const chalk = require('chalk');

const url =
  'http://api.weatherstack.com/current?access_key=2fa976f7cbd583126c5f1c4dafb17713&query=tel aviv&unites=m';

request({ url: url, json: true }, (error, response) => {
  const data = response.body.current;
  console.log(
    chalk.yellow.inverse.bold(
      `it is currently ${data.temperature} degress out. It feels like ${data.feelslike} degress out.`
    )
  );

  console.log(`weather_descriptions: ${data.weather_descriptions[0]}`);
});
