import React from 'react';
import Card from './Card.js';
import '../css/SevenHour.css';
import PropTypes from 'prop-types';

export default function SevenHour(props) {
  let sevenArray = findNextSevenHours();

  function findNextSevenHours() {
    return props.hourForecastArray.reduce((accu, hourObj, index) => {
      if (index >= 0 && index < 7) {
        accu.push(hourObj);
      }
      return accu;
    }, []);
  }

  return (
    <div className='attach-scroll'>
      <img className='scroll-1' src='../images/scroll.png'/>
    <div className="hourly-card-cont">
      {    
        sevenArray.map((hourObj, index) => {
          return ( 
            <div className="seven-hour-cont" >
              <Card type="hourly" 
                    data = {hourObj} 
              />
            </div>
          )}
        )
      }
    </div>
      <img className='scroll-2' src='../images/scroll.png'/> 
    </div>
  );
}

SevenHour.propTypes = {
  hourForecastArray: PropTypes.array 
};