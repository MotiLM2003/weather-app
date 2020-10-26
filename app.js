const chalk = require('chalk');
const geo = require('./utils/geocode');
const weather = require('./utils/forecast');

const city = process.argv[2];

if (!city)
  return console.log(
    chalk.red.inverse('You must provide location as an argument')
  );

geo.geocode(city, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    console.log(chalk.green.inverse(`calling forecast for: ${city}`));
    weather.forecast(city, (error, data) => {
      if (error) console.log(error);
      console.log(data);
    });
  }
});
