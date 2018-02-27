import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import SevenHour from '../lib/SevenHour.js';
import MockData from '../__mocks__/mockData';

describe('SevenHour', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHour hourForecastArray = {MockData.hourly_forecast}
                      />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render a card', () => {
    expect(wrapper.find('Card').length).toEqual(7);
  })

})