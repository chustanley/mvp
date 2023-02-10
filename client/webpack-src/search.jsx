import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import List from './weatherList.jsx'
const weather = require('./callingWeatherApi.js');



const Search = () => {

const [city, setCity] = useState(''); //type word

const [cityData, setCityData] = useState({temperature: 'loading...'}); // individual data

const [listData, setListData] = useState([]);



var list = () => {
  $.ajax({
    url: '/list',
    method: 'GET',
    success: (data) => {
      console.log('Sucess!', data)
      setListData(data);
    },
    error: (err) => {
      console.log('Failure!', data)
    }
  })
}

var findGeo = () => {
  const successCallback = (position) => {


    weather.currentLocation(position.coords.latitude, position.coords.longitude)
      .then((city) => {
        if (!city) {
          throw city
        }

        sending(city.data[0].name)
      })
      .catch((err) => {
        console.log(err)
      })
  };
  const errorCallback = (error) => {
    console.log(error);
  };
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}



useEffect(() => { // this gives the row its rows.
  findGeo();
  list(); // generates the drop down menu
}, []);


// useEffect(() => {

//   cityData.temperature = cityData.temperature.toString();
//   cityData.temperature = cityData.temperature + '°'
// }, cityData);










var getting = (data) => {
  setCity(data.target.value);
}


var sending = (args) => { // makes calls to weather API, stores it in database!
  document.getElementById('spinner').style.display = 'block';
  console.log('=======SEARCH=====>', city); // BE AWARE YOU HAVE TO PICK IT IN DROPDOWN

  $.ajax({
    url: '/location',
    type: 'POST',
    data: {
      data: args// this can only be city for some reason.
    },
    success: (data) => {
      console.log('success')

      setCityData(data)



      // if (Object.keys(cityData).length !== 0) {
      //   cityData.temperature = cityData.temperature.toString() + '°';
      // }









      document.getElementById('spinner').style.display = 'none';
      list(); // updates the drop down
    },
    error: () => {
      console.log('ERROR, possible duplicate found')
      alert('Please enter valid city name')
    },
    dataType: 'json'
  })
}



console.log(typeof cityData.temperature)



  return (

    <div>
      <form id='form'>
        <div id='searchBar'>
          <input id='city' type='text' onChange={getting}></input><br></br>
        </div>
        <div id='searchButton'>
    <button id='submit' type='button' onClick={() => { sending(city) }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path><path d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z"></path></svg></button>
        </div>
      </form>

      <div id='data'>
        <div id='cityName'>{cityData.name}</div>
        <div id='latilong'>{cityData.latitude} {cityData.longitude}</div>
        <div id='status'>{cityData.description}</div>

        <h1 id='temp'>{cityData.temperature}</h1>
      </div>

      <List weather={listData} sending={sending} updateMain={setCity}/>

    </div>
  )
}

export default Search;