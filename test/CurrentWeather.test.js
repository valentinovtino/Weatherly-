import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather.js';
import MockData from '../__mocks__/mockData';

describe ('CurrentWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount (<CurrentWeather currObs = {MockData.current_observation}
                                       currForecast = {MockData.forecast.simpleforecast.forecastday[0]}
                                       summary = {MockData.forecast.txt_forecast.forecastday[0].fcttext}
                    />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });

  it('should start with props', () => {
    expect(wrapper.instance().props.currObs).toEqual(MockData.current_observation);
    expect(wrapper.instance().props.currForecast).toEqual(MockData.forecast.simpleforecast.forecastday[0]);
    expect(wrapper.instance().props.summary).toEqual(MockData.forecast.txt_forecast.forecastday[0].fcttext)

  });

  it('should render the elements we expect', () => {
    expect(wrapper.find('h1').text()).toEqual('Louisville, KY');
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h3').length).toEqual(6);
    expect(wrapper.find('h3').first().text()).toEqual('Wednesday, Dec.20');
    expect(wrapper.find('h3').last().text()).toEqual('Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.');
  });
})