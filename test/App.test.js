import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import App from '../lib/App.js';
import MockData from '../__mocks__/mockData';
import LocalStorageMock from '../__mocks__/localStorage';


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
    window.localStorage = new LocalStorageMock;
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render frontpage by default', () => {
    expect(wrapper.find('WelcomePage').length).toEqual(1);
  });

  it('should have a default state of forecastObj: null', () => {
    expect(wrapper.state().forecastObj).toEqual(null);
  });

  it('should render CurrentWeather, SevenHour, TenDay, and Search when given a state', () => {
    wrapper.setState({ forecastObj: MockData });
    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHour').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('should render error message when location is not found', () => {
    wrapper.setState({ forecastObj: null, error: '404: City Not Found' })
    expect(wrapper.find('WelcomePage').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(1);
  })

  it('should check values in localStorage', () => {
    wrapper.instance().setLocalStorage('Louisville, KY');
    expect(window.localStorage.store.location).toEqual('Louisville, KY')
  })

    it('should set the state.inputCity when user types in a city', () => {
    expect(wrapper.state().inputCity).toEqual('')
    expect(wrapper.state().suggestedCities).toEqual([]) 

    wrapper.find('input').simulate('change', {target: {value: 'Denver, CO'}})

    expect(wrapper.state().inputCity).toEqual('Denver, CO')
    expect(wrapper.state().suggestedCities).toEqual([])
  })

  it('should set the inputCity text into localStorage when button is clicked', () => {
    expect(wrapper.state().inputCity).toEqual('')

    wrapper.find('input').simulate('change', {target: {value: 'Denver, CO'}})
    wrapper.find('button').simulate('click');

    expect(wrapper.state().inputCity).toEqual('Denver, CO')
    expect(JSON.parse(localStorage.location).inputCity).toEqual('Denver, CO')

  })

  it('should set the suggestedCities array when an incomplete city is typed into the input field', () => {
    expect(wrapper.state().inputCity).toEqual('')

    wrapper.find('input').simulate('change', {target: {value: 'Bou'}})
    wrapper.find('button').simulate('click');
    
    expect(wrapper.state().inputCity).toEqual('Bou')
    expect(JSON.parse(localStorage.location).suggestedCities).toEqual(['boulder, co', 'bountiful, ut'])

  })
})


