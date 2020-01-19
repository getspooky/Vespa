/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './index.scss';

export function Chart({title,data,color}) {
  return (
    <div className="card">
      <div className="card-header chart-header">
        <h4 className="card-title">{title}</h4>
      </div>
      <div className="card-body">
        <ResponsiveContainer width={'99%'} height={365}>
          <AreaChart
            data={data}
            syncId="anyId"
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke={color} fill={color} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

Chart.defaultProps = {
  color: '#8884d8',
};

Chart.propTypes = {
 title: PropTypes.string.isRequired,
 data: PropTypes.array.isRequired,
 color: PropTypes.string,
};
