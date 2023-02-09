import React, { useState } from 'react';
import $ from 'jquery';
import List from './weatherList.jsx'

const Search = () => {

const [city, setCity] = useState('');

const [cityData, setCityData] = useState([]);







// create get request that will send to a specific endpoint
/*

from there, get all data from mongo. (longitude)

loop through that data array object ()

MAKE CALLS to the API with the longitude and latitude

target the .then data and send it all back here.

add all this to city data and then have that send over to the list



maybe have a main that targets the my location.

*/


var loader = () => {
$.ajax({
  url: '/load',
  type: 'GET',
  success: () => {
    console.log('success')
  },
  error: () => {
    console.log('error')
  }
})
};

var getting = (data) => {
  setCity(data.target.value);
}

var sending = () => { // makes calls to weather API, stores it in database!
  console.log(city);

  $.ajax({
    url: '/location',
    type: 'POST',
    data: {
      data: city
    },
    success: (data) => {
      console.log('success')
      // setCityData(data)
      loader();
    },
    error: () => {
      console.log('ERROR, possible duplicate found')
      alert('City has already been searched')
    },
    dataType: 'json'
  })
}

// console.log('------CITYDATA---->', cityData)

  return (
    <div>
      <form id='form'>
        <label htmlFor='city'>Please enter city name </label><br></br>
        <input id='city' type='text' onChange={getting}></input><br></br>
        <button id='submit' type='button' onClick={sending}>Check Weather Now</button>
      </form>

      <div>
        <h1>city:{cityData.name}</h1>
      </div>

      <List weather={cityData}/>

    </div>
  )
}

export default Search;