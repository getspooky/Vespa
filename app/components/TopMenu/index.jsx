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
import {Link} from 'react-router-dom';
import {withNamespaces} from 'react-i18next';
import MenuList from 'config/menu';
import './index.scss';

function TopMenu({t:lang}) {
  return (
    <div className="header d-lg-flex p-1 collapse " id="headerMenuCollapse" >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 ml-auto">
            <div className="input-group md-form form-sm form-2 pl-0">
             <input className="form-control my-0 py-1 amber-border m-l-5" type="text" placeholder={lang('TopNav.search')} aria-label="Search" />
              <div className="input-group-append">
                <span className="input-group-text amber lighten-3" id="basic-text1">
                  <i className="fa fa-search text-grey" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg order-lg-first">
            <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
              { MenuList.map(({label,translation, href, icon}) => {
                return (<li className="nav-item" key={label}>
                  <Link to={href} className="nav-link">
                    <i className={icon} /> {lang(translation)}
                  </Link>
                </li>)
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

TopMenu.propTypes = {
  t: PropTypes.func.isRequired
};

export default withNamespaces()(TopMenu);
