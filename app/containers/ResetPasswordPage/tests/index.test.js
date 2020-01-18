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
import ResetPassword from '../index';

let wrapper = null;

beforeEach(() => {
  wrapper = mount(
    <Router>
      <ResetPassword match={{ params: { token:'ej8eqkj7vziua267ln3n25ns43a977myuqmerjzju6u1b42q3bf99yvv2n0uq0uarmji3kfhfg8pexdq3rhftgbxlf' } }} />
    </Router>
  );
});

describe('<ResetPassword /> Page', () => {

  it('should contains input fields', () => {
    expect(wrapper.find('.field').length).toEqual(2);
  });

  it('simulate onChange event for password input', () => {
    wrapper.find('input').at(0).simulate('change', {
      target: {
        name: 'password',
        value: 'test123456789',
      }
    });
    wrapper.update();
    expect(wrapper.find('input').at(0).prop('value')).toEqual('test123456789');
  });

  it('should return validation errors', () => {
    wrapper.find('button').at(0).simulate('click');
    wrapper.update();
    expect(wrapper.find('.srv-validation-message').at(0).text()).toEqual('The old password field is required.');
  });

});


