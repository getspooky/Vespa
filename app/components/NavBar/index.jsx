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
import {withNamespaces} from 'react-i18next';
import './index.scss';

function NavBar({t:lang}) {
  return (
    <div className="header py-2">
      <div className="container">
        <div className="d-flex">
          <img src={require('../../images/icon-512x512.png')} className="header-brand-img logo" alt="vespa logo" />
          <div className="d-flex order-lg-2 ml-auto">
            <div className="dropdown">
              <a href="#" className="nav-link pr-0 leading-none" data-toggle="dropdown">
                <span className="avatar" style={{backgroundImage: 'url(https://avatars0.githubusercontent.com/u/37160072?s=400&u=e8360027c9964e91464782fb8c9b334af1e64333&v=4)'}} />
                <span className="ml-2 d-none d-lg-block">
                    <span className="text-default">Yasser Ameur</span>
                    <small className="text-muted d-block mt-0">Developer</small>
                  </span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <a className="dropdown-item" href="#">
                  <i className="dropdown-icon fe fe-user" /> {lang('NavBar.dropdown-menu.profile')}
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <i className="dropdown-icon fe fe-help-circle" /> {lang('NavBar.dropdown-menu.help_circle')}
                </a>
                <a className="dropdown-item" href="#">
                  <i className="dropdown-icon fe fe-log-out" /> {lang('NavBar.dropdown-menu.log_out')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  t: PropTypes.func.isRequired
};

export default withNamespaces()(NavBar);
