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
import Navbar from '../index';
import 'app/i18n';

let wrapper = null;

beforeEach(() => {
  wrapper = mount(
    <Router>
      <Navbar />
    </Router>
  );
});

describe('Navbar component', () => {

  it('should contains header py-2 ClassName', () => {
    expect(wrapper.find('.header.py-2').length).toEqual(1);
  });

});


