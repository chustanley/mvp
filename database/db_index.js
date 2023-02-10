const mongoose = require('mongoose');
mongoose.set('strictQuery', true); // suppresses warning
mongoose.connect('mongodb://127.0.0.1:27017/weatherApp'); //input the database into mongoDB


const citySchema = new mongoose.Schema({
  name: {
    type: String
  },
  longitude: Number,
  latitude: Number,
  temperature: String,
  description: String

});

 let City = mongoose.model('City', citySchema);


var storingWeather = (data) => {

  let cityData = new City({
    name: data.name,
    longitude: data.coord.lon,
    latitude: data.coord.lat,
    temperature: data.main.temp,
    description: data.weather[0].description
  })


  console.log('------updated Schema --->', cityData) // getting the most updated weather for tokyo


  return City.findOne({name: data.name})
    .then((data) => {
      if (!data) {
        throw data
      }

      // delete. then save?

      return City.deleteOne({name: data.name})
    })
    .then((deleted) => {
      return cityData.save();
    })
    .catch((err) => {
      console.log(err)
      return cityData.save();
    })





/*

How to update when we see a match

how to not update when

*/





}

module.exports.storingWeather = storingWeather;
module.exports.City = City;