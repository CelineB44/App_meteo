import React from 'react';
import './App.css';
import Weather from './Components/Weather';

//be9caf3e4e61ceb97e40d5c3772fa3ff
//api.openweathermap.org/data/2.5/weather?lat=35&lon=139

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Météo City</h1>
       <Weather/>
      </header>
    </div>
  );
}

export default App;
