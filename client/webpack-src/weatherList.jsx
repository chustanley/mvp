import React from 'react'

const List = ({ weather, sending, updateMain }) => {


var testing = () => { // maybe change to on change is when this happens
  var selectedCity = document.getElementById('dropDown').value





  sending(selectedCity)
}




  return (
    <div>
    <select id='dropDown'>
      {weather.map((city) => {
        return (<option key={city.name}>{city.name}</option>)
      })}
    </select>
     <button id='submit' type='button' onClick={testing}>Check Weather Now</button>

    </div>

  )
}

export default List;