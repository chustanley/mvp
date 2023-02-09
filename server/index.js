const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');
const weather = require('../client/webpack-src/callingWeatherApi.js');
const db = require('../database/db_index.js');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../client')));



app.get('/list', (req, res) => {
  db.City.find()
    .then((data) => {

      if (!data) {
        throw data
      }
      console.log('THE LIST----->', data)
      res.status(200).send(data);
    }).catch((err) => {
      console.log(err)
      res.status(404).send(err)
    })
})









app.post('/location', (req, res) => {

  console.log('testing', req.body.data)


  weather.getWeather(req.body.data)
  .then((city) => {

    if (!city) {
      throw city
    }

    // console.log('----->', city) // this works
    return db.storingWeather(city.data)
  })
  .then((databaseData) => {

    console.log('------->>>>>>>>>>>>>>>>>>', databaseData)

    if (!databaseData) {
      throw databaseData
    }
    res.status(200).send(databaseData);
  })
  .catch((err) => {
    console.log('ERROR', err)
    res.status(404).send(err);
  })
})



app.listen(port, () => {
  console.log('Sucessfully listening to port 3000')
})