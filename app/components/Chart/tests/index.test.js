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
import {Chart} from '../index';
import { AreaChart } from 'recharts';

let wrapper = null;
let data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

beforeEach(() => {
  wrapper = mount(
    <Router>
      <Chart title="Development Activity" data={data} />
    </Router>
  );
});

describe('<Card /> component', () => {

  it('should contains title', () => {
    expect(wrapper.find('.card-title').at(0).text().trim()).toEqual('Development Activity');
  });

  it('should contains <AreaChart /> ', () => {
    expect(wrapper.find('.recharts-responsive-container').length).toEqual(1);
  });

});


