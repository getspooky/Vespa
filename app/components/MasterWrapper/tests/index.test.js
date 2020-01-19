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
import {MasterWrapper} from '../index';
import 'app/i18n';

let wrapper = null;

beforeEach(() => {
  wrapper = mount(
    <Router>
      <MasterWrapper>
        Hello
      </MasterWrapper>
    </Router>
  );
});

describe('<MasterWrapper /> component', () => {

  it('should contains <Footer />', () => {
    expect(wrapper.find('.footer').length).toEqual(1);
  });

  it('should contains <TopMenu />', () => {
    expect(wrapper.find('#headerMenuCollapse').length).toEqual(1);
  });

  it('should contains Children', () => {
    expect(wrapper.find('.page').text().trim()).toEqual('Hello');
  });

});


