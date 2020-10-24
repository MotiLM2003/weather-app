const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=2fa976f7cbd583126c5f1c4dafb17713&query=%22tel%20aviv%22';

request({ url: url, json: true }, (error, response) => {
  const data = response.body;
  console.log(data.current);
});
