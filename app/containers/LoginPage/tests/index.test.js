/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import LoginPage from '../index';

let store = null;
let wrapper = null;

beforeAll(() => {
  const mockStore = configureStore();
  const initialState = {
    AUTH_REDUCER: {
      Auth: {
        isAuthenticated: false,
        // Get token from localStorage.
        token: localStorage.getItem('_token'),
      },
    }
  };
  store = mockStore(initialState);
});

beforeEach(() => {
  wrapper = mount(
    <Router>
      <LoginPage store={store} />
    </Router>
  );
});

describe('<Login /> Page', () => {

  it('should contains input fields', () => {
    expect(wrapper.find('.field').length).toEqual(2);
  });

  it('simulate onChange event for username input', () => {
    wrapper.find('input').at(0).simulate('change', {
      target: {
        name: 'email',
        value: 'ameur@example.com',
      }
    });
    wrapper.update();
    expect(wrapper.find('input').at(0).prop('value')).toEqual('ameur@example.com');
  });

  it('should return validation errors', () => {
    wrapper.find('button').at(0).simulate('click');
    wrapper.update();
    expect(wrapper.find('.srv-validation-message').at(0).text()).toEqual('The email field is required.');
  });

});


