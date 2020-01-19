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
import {Card} from '../index';
import 'app/i18n';

let wrapper = null;
let data = [{
  "id": 1,
  "content": "Laravel is an incredible framework built by Taylor Otwell that combines powerful web development features, extensive documentation and an active community .In this tutorial we are going to build a fullstack application complete with an admin panel using laravelDash.",
  "created_at": "January 31, 2019",
  "user": {
    "_id": 1,
    "username": "getspooky",
    "avatar": "https://avatars3.githubusercontent.com/u/37160072?s=460&v=4"
  }
}];

beforeEach(() => {
  wrapper = mount(
    <Router>
      <Card data={data} />
    </Router>
  );
});

describe('<Card /> component', () => {

  it('should contains post-card', () => {
    expect(wrapper.find('#post-card').length).toEqual(1);
  });

  it('should contains content text', () => {
    expect(wrapper.find('.text-muted').at(0).text().trim()).toEqual(data[0].content);
  });

  it('should contains username', () => {
    expect(wrapper.find('.text-default').at(0).text().trim()).toEqual(data[0].user.username);
  });

});


