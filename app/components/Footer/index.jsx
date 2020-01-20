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

export function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-auto ml-lg-auto">
            <div className="row align-items-center">
              <div className="col-auto">
                <ul className="list-inline list-inline-dots mb-0">
                  <li className="list-inline-item">
                    <a href="./docs/index.html">Documentation</a>
                  </li>
                </ul>
              </div>
              <div className="col-auto">
                <a
                  href=""
                  className="btn btn-outline-primary btn-sm"
                >
                  <i className="fa fa-twitter" /> Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-auto mt-3 mt-lg-0 text-center">
            Released under the
            <a href=""> MIT License </a>
            Copyright © 2020
            <a href="https://github.com/getspooky"> getspooky</a> All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {};
