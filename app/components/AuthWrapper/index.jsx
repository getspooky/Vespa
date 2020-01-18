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
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './index.scss';

export function AuthWrapper({children,title, links}) {
  return (
    <div className="hero is-whisper is-fullheight">
      <div className="container has-text-centered p-t-25" style={{"width":"1400px"}}>
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-black">{title}</h3>
          <p className="subtitle has-text-black">Welcome to our Vespa ❤</p>
          <div className="box">
            { children }
          </div>
          <p className="has-text-grey">
            {links.map(({href,label})=>(<Link key={label} to={href}>{label} &nbsp;·&nbsp;</Link>))}
          </p>
        </div>
      </div>
    </div>
  );
}

AuthWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.element.isRequired
};
