import React, { useState } from 'react';

import styles from './Card.module.css'

export default function Card({ longitud, latitud, wind, pressure, humidity, max, min, temp, name, country, img, onClose }) {

  const [infoIsVisible, setInfoIsVisible] = useState(false);

  const handleVisible = () => {
    setInfoIsVisible(!infoIsVisible);
  }

  return (
    <div className="col-lg-4">
      <div className={styles.content_card + ' shadow'}>
        <div className="col-lg-12">
          <div className={styles.content_button}>
            <button
              type="submit"
              className={styles.btn}
              onClick={onClose}
            >x
        </button>
          </div>
        </div>
        <div className="col-lg-12">
          <div className={styles.content_name}>
            <i className="fas fa-map-marker-alt fa-lg"></i>
            <h4>{name}, {country}</h4>
          </div>
          <div className={styles.content_temp}>
            <h1>{temp}°</h1>
          </div>
          <div className={styles.content_image}>
            <img
              src={"http://openweathermap.org/img/wn/" + img + "@4x.png"}
              alt={name}
            />
          </div>
          <div className={infoIsVisible ? 'expand_active' : 'expand_disabled'}>
            <div className={styles.content__}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <i className="fas fa-temperature-low fa-lg"></i>
                </div>
                <div className={styles.item}>
                  <div>
                    <p>Minima</p>
                  </div>
                  <div>
                    <h6>{min}°</h6>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <i className="fas fa-temperature-high fa-lg"></i>
                </div>
                <div className={styles.item}>
                  <div>
                    <p>Maxima</p>
                  </div>
                  <div>
                    <h6>{max}°</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content__}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <i className="fas fa-water fa-lg"></i>
                </div>
                <div className={styles.item}>
                  <div>
                    <p>Humedad</p>
                  </div>
                  <div>
                    <h6>{humidity}%</h6>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <i className="fas fa-sort-amount-down-alt fa-lg"></i>
                </div>
                <div className={styles.item}>
                  <div>
                    <p>Presion</p>
                  </div>
                  <div>
                    <h6>{pressure}hPa</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content__}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <i className="fas fa-water fa-lg"></i>
                </div>
                <div className={styles.item}>
                  <div>
                    <p>Viento</p>
                  </div>
                  <div>
                    <h6>{wind}m/s WSW</h6>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <i className="fas fa-location-arrow fa-lg"></i>
                </div>
                <div className={styles.item}>
                  <div>
                    <p>Longitud / Latitud</p>
                  </div>
                  <div>
                    <h6>{longitud + ', ' + latitud}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center pt-4">
            <button
              className='btn_down'
              onClick={handleVisible}
            >
              <i className="fas fa-angle-down fa-2x"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};