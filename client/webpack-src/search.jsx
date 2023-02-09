import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import List from './weatherList.jsx'

const Search = () => {

const [city, setCity] = useState(''); //type word

const [cityData, setCityData] = useState({}); // individual data

const [listData, setListData] = useState([]);



var list = () => {

  console.log('GET LIST OF DATA IS BEING CALLED')

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

useEffect(() => { // this gives the row its rows.
  list();
}, []);






var getting = (data) => {
  setCity(data.target.value);
}








var sending = (args) => { // makes calls to weather API, stores it in database!


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
      list(); // updates the drop down
    },
    error: () => {
      console.log('ERROR, possible duplicate found')
      alert('City has already been searched')
    },
    dataType: 'json'
  })
}



  return (
    <div>
      <form id='form'>
        <label htmlFor='city'>Please enter city name </label><br></br>
        <input id='city' type='text' onChange={getting}></input><br></br>
        <button id='submit' type='button' onClick={() => { sending(city) }}>Check Weather Now</button>
      </form>

      <div>
        <h1>City: {cityData.name}</h1>
        <h1>Latitude: {cityData.latitude}</h1>
        <h1>Longitude: {cityData.longitude}</h1>
        <h1>Temperature: {cityData.temperature}</h1>
        <h1>Description: {cityData.description}</h1>
      </div>

      <List weather={listData} sending={sending} updateMain={setCity}/>

    </div>
  )
}

export default Search;