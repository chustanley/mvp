import React, { useState } from 'react';
import reactDom from 'react-dom';
import Search from './search.jsx'

const App = () => {


  // const [mainWeather, setMainWeather] = useState('');



  return (
    <div id='weather'>
      <h1>weatherNow</h1>
      <Search />
    </div>
  );
};

reactDom.render(<App />, document.getElementById('app'));