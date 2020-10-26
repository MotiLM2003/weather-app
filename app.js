const chalk = require('chalk');
const geo = require('./utils/geocode');
const weather = require('./utils/forecast');

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

weather.forecast('tel aviv', (error, data) => {
  console.log(error);
  console.log(data);
});

// geo.geocode('chicago', (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {clear

//     console.log(data);
//   }
// });
