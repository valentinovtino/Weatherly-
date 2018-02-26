import React from 'react';
import Card from './Card.js';
import '../css/TenDay.css';
import PropTypes from 'prop-types';

export default function TenDay (props) {
  return (
    <div className="day-container">
      {
        props.dayForecastArray.map((dayObj, index) => {
          return (
            <div className="tenday-card" >
              <Card type = 'tenDay'
                    data = {dayObj} />
            </div>
          );
        })
      }  
    </div>
  );
}

TenDay.propTypes = {
  dayForecastArray: PropTypes.array
};