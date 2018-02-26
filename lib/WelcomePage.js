import React from 'react';
// import trie from './AutoComplete.js';
import Search from './Search.js';
import '../css/Welcome.css';
import PropTypes from 'prop-types';

export default function WelcomePage(props) {
  return (
    <header className='Front-page'>
        <h1 id="title"> Prepare </h1>
        <div className='submit-city-form'>
          <Search getWeatherApi = {props.getWeatherApi}/>
        </div>
    </header>
  );
}

WelcomePage.propTypes = {
  getWeatherApi: PropTypes.func
};