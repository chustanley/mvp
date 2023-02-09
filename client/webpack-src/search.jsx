import React, { useState } from 'react';
import $ from 'jquery';

const Search = () => {

const [city, setCity] = useState('');



var getting = (data) => {
  setCity(data.target.value);
}

var sending = () => {
  console.log(city);

  $.ajax({
    url: '/location',
    type: 'POST',
    data: {
      data: city
    },
    success: (data) => {
      console.log('success')
      console.log(data);
    },
    error: () => {
      console.log('ERROR, possible duplicate found')
      alert('City has already been searched')
    },
    dataType: 'json'
  })
}

  return (
      <form id='form'>
        <label htmlFor='city'>Please enter city name </label><br></br>
        <input id='city' type='text' onChange={getting}></input><br></br>
        <button id='submit' type='button' onClick={sending}>Check Weather Now</button>
      </form>
  )
}

export default Search;