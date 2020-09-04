import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav'
import Cards from './components/Cards'
import Header from './components/Header';

const apiKey = 'd0de0681f67378c0e4cb1367cc96c311';

const App = () => {
  const [cities, setCities] = useState([]);

  const onSearch = (ciudad) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            pressure: recurso.main.pressure,
            humidity: recurso.main.humidity,
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            country: recurso.sys.country
          };
          setCities(oldCities => [...oldCities, ciudad]);
        }
      });
  }

  const onClose = (id) => {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (
    <div className="App">
      <Nav
        onSearch={onSearch}
      />
      <Header 
        onSearch={onSearch}
      />
      <div className="container">
        <Cards
          cities={cities}
          onClose={onClose}
        />
      </div>
    </div>
  );
}

export default App;
