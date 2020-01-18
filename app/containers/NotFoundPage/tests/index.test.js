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
import NotFoundPage from '../index';

let wrapper = null;

beforeEach(() => {
  wrapper = mount(
    <Router>
      <NotFoundPage />
    </Router>
  );
});

describe('<NotFoundPage /> Page', () => {

  it('should contains 404 status', () => {
    expect(wrapper.find('div').at(2).text().trim()).toEqual('404');
  });

  it('should contains message', () => {
    expect(wrapper.find('p').text().trim()).toEqual('We are sorry but our service is currently not available…');
  });

});


