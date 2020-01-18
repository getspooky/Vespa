/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import './index.scss';

export default function() {
  return (
    <div className="content" style={{"marginTop":"25vh"}}>
      <div className="text-center">
        <div className="display-1 text-muted mb-5">
          <i className="si si-exclamation" /> 404
        </div>
        <h1 className="h2 mb-3">Oops.. You just found an error page..</h1>
        <p className="h4 text-muted font-weight-normal mb-7">
          We are sorry but our service is currently not available…
        </p>
      </div>
    </div>
  );
}
