import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import WelcomePage from '../lib/WelcomePage.js';
import MockData from '../__mocks__/mockData';

describe('WelcomePage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WelcomePage />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render header by default', () => {
    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
  });
})