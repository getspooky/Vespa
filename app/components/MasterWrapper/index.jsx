/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../NavBar';
import TopMenu from '../TopMenu';
import { Footer } from '../Footer';
import './index.scss';

export function MasterWrapper({children}) {
  return (
    <Fragment>
      <NavBar />
      <TopMenu />
      <div className="container px-5 py-6 page">
        {children}
      </div>
      <Footer />
    </Fragment>
  );
}

MasterWrapper.propTypes = {
  children: PropTypes.element.isRequired
};
