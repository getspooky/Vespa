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
import {AuthWrapper} from '../index';
import {Footer} from 'app/components/Footer';

let wrapper = null;

beforeEach(() => {
  wrapper = mount(
    <Router>
     <AuthWrapper title="Test" links={[
       { href: '/register' , label: 'Sign Up'},
       { href: '/login', label: 'Sign In'},
       { href: '/', label: 'Need Help?'}
     ]}>
       <Footer />
     </AuthWrapper>
    </Router>
  );
});

describe('<AuthWrapper /> Page', () => {

  it('should contains title', () => {
    expect(wrapper.find('p').at(0).text().trim()).toEqual('Welcome to our Vespa ❤');
  });

  it('should contains children component', () => {
    expect(wrapper.find('.footer').length).toEqual(1);
  });

});


