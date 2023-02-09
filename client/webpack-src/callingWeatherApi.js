var axios = require('axios');

var getCoordinates = (location) => {


var split = location.split(', ');
var city = split[0];
var state = split[1];
var ApiKey = 'f3b9ce05b328f30e85a7cf26381a19c6'

  var resultObject = {
    method: 'GET',
    url: `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=${ApiKey}`
  }

  return axios(resultObject);
}


var getWeather = (latitude, longitude) => {
  var ApiKey = 'f3b9ce05b328f30e85a7cf26381a19c6'

  var climateObject = {
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiKey}&units=imperial`
  }

  console.log('hi', longitude, latitude)
  return axios(climateObject);
}





module.exports = { getCoordinates, getWeather }