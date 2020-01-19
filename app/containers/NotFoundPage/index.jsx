/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import {withNamespaces} from 'react-i18next';
import './index.scss';

const NotFoundPage = function({t:lang}) {
  return (
    <div className="content" style={{"marginTop":"25vh"}}>
      <div className="text-center">
        <div className="display-1 text-muted mb-5">
          <i className="si si-exclamation" /> {lang('NotFoundPage.status')}
        </div>
        <h1 className="h2 mb-3">{lang('NotFoundPage.title')}</h1>
        <p className="h4 text-muted font-weight-normal mb-7">
          {lang('NotFoundPage.message')}
        </p>
      </div>
    </div>
  );
};

export default withNamespaces()(NotFoundPage);


