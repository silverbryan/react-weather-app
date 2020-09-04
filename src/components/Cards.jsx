import React from 'react';

import Card from './Card'

export default function Cards( {cities, onClose} ) {
  return (
    <div className="row mt-5 pt-5">
      {cities.map(city => (
        <Card
          key={city.id}
          longitud={city.longitud}
          latitud={city.latitud}
          wind={city.wind}
          pressure={city.pressure}
          humidity={city.humidity}
          max={city.max}
          min={city.min}
          temp={city.temp}
          name={city.name}
          country={city.country}
          img={city.img}
          onClose={onClose}
        />
      ))}
    </div>
  );
};