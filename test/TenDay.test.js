import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import TenDay from '../lib/TenDay.js';
import MockData from '../__mocks__/mockData';

describe('TenDay', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenDay dayForecastArray = {MockData.forecast.simpleforecast.forecastday}
                      />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  }) 

  it('should render a Card', () => {
    expect(wrapper.find('Card').length).toEqual(10);
  })

  });