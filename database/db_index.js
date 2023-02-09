const mongoose = require('mongoose');
mongoose.set('strictQuery', true); // suppresses warning
mongoose.connect('mongodb://127.0.0.1:27017/weatherApp'); //input the database into mongoDB


const citySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  longitude: Number,
  latitude: Number
});

 const City = mongoose.model('City', citySchema);


var storingWeather = (data) => {


  // console.log(data);

  let cityData = new City({
    name: data.name,
    longitude: data.coord.lon,
    latitude: data.coord.lat
  })


  // console.log(cityData)

  return cityData.save()
    .then((cityInfo) => {
      if (!cityInfo) {
        throw cityInfo
      } else {
        return data // if no problem in saving, return data
      }
    })
    .catch((err) => {
      return null // if problem w/ saving, return null
    })


}

module.exports.storingWeather = storingWeather;