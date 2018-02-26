import React, { Component } from 'react';
import trie from './AutoComplete.js';
import PropTypes from 'prop-types';
import '../css/Search.css';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputCity: '',
      suggestedCities: []
    };

    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleBtnClick () {
    this.props.getWeatherApi(this.state.inputCity);
  }

  handleChange (e) {
    this.setState({
      inputCity: e.target.value,
      suggestedCities: trie.suggest(e.target.value.toLowerCase())
    });

    if (e.target.value === '') {
      this.setState({
        inputCity: '',
        suggestedCities: []
      });
    }
  }

  render() {
    return (
    <div className="change-search">
      <label htmlFor="enter-city" ></label>
        <input
          placeholder="Enter City, State or zip code..."
          id="city-input"
          onChange={this.handleChange}
          value={this.state.inputCity}
        />
      <button className='submit' 
              onClick={ this.handleBtnClick }
      >Submit</button>

      {
          this.state.suggestedCities.length ?

          <div className="suggest-container">
          {
            this.state.suggestedCities.map((city, index) => {
              return (
                    <p  key={index}
                        className="suggestedCities"
                        onClick={() => {
                          trie.select(city);
                          this.setState({ inputCity: city, 
                                          suggestedCities: []
                                        });
                        }}> {city} 
                    </p>
                  );
            })
          }
          </div>

          :

          <div>
          </div>
      }

    </div>
  );
  }
}

Search.propTypes = {
  getWeatherApi: PropTypes.func 
};