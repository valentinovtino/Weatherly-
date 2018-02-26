import React from 'react';
import '../css/Card.css';
import PropTypes from 'prop-types';

export default function Card(props) {
  let imageSource = 
    'http://icons.wxug.com/i/c/f/nt_' + props.data.icon + '.gif';

  return (
    props.type === 'hourly' ?
      <div>
        <div className="seven-hour">
          <h2> {props.data.FCTTIME.civil} </h2>
          <img className='weather-image' src={imageSource} />
          <h3> {props.data.temp.english}° </h3>
        </div>
      </div>

    : 

      <div>
        <div className="ten-day">
          <h2> {props.data.date.weekday} </h2>
          <img className="ten-day-img" src ={imageSource} />
          <h2> High: {props.data.high.fahrenheit}°</h2>
          <h2> Low: {props.data.low.fahrenheit}°</h2>
        </div>
      </div>
  );

}

Card.propTypes = {
  getWeatherApi: PropTypes.func, 
  data: PropTypes.object,   
  type: PropTypes.string 
};