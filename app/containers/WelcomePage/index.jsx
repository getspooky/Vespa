/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

export default function() {
  return (
    <div className="content py-6">
      <img src={require('../../images/icon-512x512.png')} alt="logo" />
      <div className="links">
        <Link to="/login">Login</Link>
        <a href="https://github.com/getspooky/Vespa">Docs</a>
        <a href="https://github.com/getspooky/Vespa/issues">Issues</a>
        <a href="https://github.com/getspooky/Vespa/pulls">Pull Requests</a>
        <a href="https://beerpay.io/getspooky/Vespa">Sponsor</a>
        <a href="https://github.com/getspooky/Vespa">GitHub</a>
      </div>
    </div>
  );
}
