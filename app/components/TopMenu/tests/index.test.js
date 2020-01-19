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
import TopMenu from '../index';
import 'app/i18n';

let wrapper = null;

beforeEach(() => {
  wrapper = mount(
    <Router>
      <TopMenu />
    </Router>
  );
});

describe('<TopMenu /> Page', () => {

  it('should contains headerMenuCollapse', () => {
    expect(wrapper.find('#headerMenuCollapse').length).toEqual(1);
  });

});


