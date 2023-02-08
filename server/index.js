const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');
const weather = require('../client/webpack-src/callingWeatherApi.js')



app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../client')));



app.post('/location', (req, res) => {
  console.log(req.body.data)

  console.log(weather)


  weather.getCoordinates(req.body.data)
  .then((coordinate) => {
    if (!coordinate) {
      throw coordinate
    } else {
      //This only works for if we find only ONE location
      var latitude = coordinate.data[0].lat.toString();
      var longitude = coordinate.data[0].lon.toString();

      console.log(latitude, longitude);

      return weather.getWeather(latitude, longitude);
    }
  })
  .then((climate) => {
    if (!climate) {
      throw climate;
    } else {
      console.log(climate);
    }
  })
  .catch(() => {
    console.log('ERROR')
  })





})



app.listen(port, () => {
  console.log('Sucessfully listening to port 3000')
})