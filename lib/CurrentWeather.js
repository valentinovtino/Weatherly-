import React from 'react';
import '../css/CurrentWeather.css';
import PropTypes from 'prop-types';

export default function CurrentWeather (props) {
  return (
    <div className="city-info">
      <h1 className="city-title">
      {props.currObs.display_location.full}</h1>
      <h3 className="date currFont">
      {props.currForecast.date.weekday}, {props.currForecast.date.monthname_short}. 
      {props.currForecast.date.day}</h3>
      <h3 className="current-condition currFont">
      {props.currObs.weather}</h3>
      <h3 className="currFont"> 
      Current Temperature: {props.currObs.temp_f}°F</h3>
      <h3 className="current-design currFont"> 
       High: {props.currForecast.high.fahrenheit}°</h3>
      <h3 className="current-design currFont"> 
      Low: {props.currForecast.low.fahrenheit}°</h3>
      <h3 className="current-design summary-redux currFont"> 
      {props.summary}</h3>
    </div>
  );
}

CurrentWeather.propTypes = {
  currObs: PropTypes.object,
  summary: PropTypes.string, 
  currForecast: PropTypes.object 
};