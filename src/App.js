import React from 'react';
import './App.css';
import CovidData from './Components/CovidData';
import Covidapi from './Components/Covidapi';

function App() {
  return (
    <div className="App">
      <Covidapi />
      
     {/* <CovidData /> */}
    </div>
  );
}

export default App;
