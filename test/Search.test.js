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

  
})