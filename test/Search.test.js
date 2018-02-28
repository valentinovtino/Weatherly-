import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import Search from '../lib/Search.js';
import MockData from '../__mocks__/mockData';
import localStorageMock from '../__mocks__/localStorage';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />)
    window.localStorage = localStorageMock;
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render an input and a button', () => {
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('label').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should render a p tag when there is a suggested city', () => {
    wrapper.setState({ inputCity: null, suggestedCities: [' Denver, Co ']});
    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('p').text()).toEqual(' Denver, Co ');
  });


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

  
