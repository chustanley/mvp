var axios = require('axios');

var getWeather = (location) => {

  console.log('hi')



var ApiKey = 'f3b9ce05b328f30e85a7cf26381a19c6'
var location = location;
  var resultObject = {
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${ApiKey}&units=imperial`
  }

  return axios(resultObject)
}


var currentLocation = (latitude, longitude) => {
  var ApiKey = 'f3b9ce05b328f30e85a7cf26381a19c6'
  var location = location;
  var resultObject = {
    method: 'GET',
    url: `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=${1}&appid=${ApiKey}`
  }

  return axios(resultObject)
}




module.exports = { getWeather, currentLocation }