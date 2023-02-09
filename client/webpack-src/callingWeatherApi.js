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






module.exports = { getWeather }