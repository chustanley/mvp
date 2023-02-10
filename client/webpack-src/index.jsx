import React, { useState } from 'react';
import reactDom from 'react-dom';
import Search from './search.jsx'

const App = () => {


  return (
    <div class='card'>
      <h1 id='title'>weatherNow</h1>
      <img id='spinner' src='spinner.gif'></img>
      <Search />
    </div>
  );
};

reactDom.render(<App />, document.getElementById('app'));