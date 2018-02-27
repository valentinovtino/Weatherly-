import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import Card from '../lib/Card.js';
import MockData from '../__mocks__/mockData';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (<Card type='hourly'
                             data = {MockData.hourly_forecast[0]} 
                      />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should start with props', () => {
    expect(wrapper.instance().props.data).toEqual(MockData.hourly_forecast[0]);
    expect(wrapper.instance().props.type).toEqual('hourly');
  })

  it('should redner h2, img and h3 tags if prop.type is hourly', () => {
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('h2').text()).toEqual(' 12:00 PM ');
    expect(wrapper.find('h3').text()).toEqual(' 47° ');
  })

  it('should start with props', () => {
    wrapper = shallow (<Card type='tenDay'
                             data = {MockData.forecast.simpleforecast.forecastday[0]} 
                      />)

    expect(wrapper.instance().props.data).toEqual(MockData.forecast.simpleforecast.forecastday[0]);
    expect(wrapper.instance().props.type).toEqual('tenDay');
  })  

  it('should render three h2s and an img tag if prop.type is tenDay', () => {
    wrapper = shallow (<Card type='tenDay'
                             data = {MockData.forecast.simpleforecast.forecastday[0]} 
                      />)

    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('h2').length).toEqual(3);
    expect(wrapper.find('h2').first().text()).toEqual(' Wednesday ');
    expect(wrapper.find('h2').last().text()).toEqual(' Low: 32°');
  })
})