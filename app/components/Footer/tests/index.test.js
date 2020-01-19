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
import {Footer} from '../index';

let wrapper = null;

beforeEach(() => {
  wrapper = mount(
    <Router>
      <Footer />
    </Router>
  );
});

describe('<Footer /> component', () => {

  it('should contains footer ClassName', () => {
    expect(wrapper.find('.footer').length).toEqual(1);
  });

  it('should contains Documentation text', () => {
    expect(wrapper.find('a').at(0).text().trim()).toEqual('Documentation');
  });

  it('should contains Twitter text', () => {
    expect(wrapper.find('a').at(1).text().trim()).toEqual('Twitter');
  });

  it('should contains GitHub links', () => {
    expect(wrapper.find('a').at(3).prop('href')).toEqual('https://github.com/getspooky');
  });

});


