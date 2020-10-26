const request = require('request');
const chalk = require('chalk');

const url =
  'http://api.weatherstack.com/current?access_key=2fa976f7cbd583126c5f1c4dafb17713&query=tel aviv&unites=m';

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log(error);
//   } else if (response.body.error) {
//     console.log(chalk.red.bold.inverse(response.body.error.info));
//   } else {
//     const data = response.body.current;
//     console.log(
//       chalk.yellow.inverse.bold(
//         `it is currently ${data.temperature} degress out. It feels like ${data.feelslike} degress out.`
//       )
//     );
//     console.log(`weather_descriptions: ${data.weather_descriptions[0]}`);
//   }
// });

const url2 =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/chicago.json?limit=1&access_token=pk.eyJ1IjoibW90aWVsbWFraWVzIiwiYSI6ImNrZ3BtYXoyZDBybHUzOG1vemVxdnNtNGEifQ.Fn6UHPIlYa19lQKvmfX11w';

request({ url: url2, json: true }, (error, response) => {
  if (error) {
    console.log(error);
  } else if (response.body.message) {
    console.log(response.body.message);
  } else {
    const data = response.body.features[0];
    const latitude = data.center[1];
    const longitude = data.center[0];
    console.log(latitude, longitude);
  }
});
