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
import './index.scss';

export function Card({data}) {
  return (
    <div className="row row-cards row-deck">
      {data.map(({id,content,created_at,user})=> (
        <div className="col-lg-4" key={id}>
          <div className="card card-aside" id="post-card">
            <div className="card-body d-flex flex-column">
              <div className="text-muted">{content.substr(0,400)}</div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <div
                  className="avatar avatar-md mr-3"
                  style={{ backgroundImage: `url(${user.avatar})` }}
                />
                <div>
                  <a href="./profile.html" className="text-default">
                    {user.username}
                  </a>
                  <small className="d-block text-muted">
                    {created_at}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.arrayOf({
    _id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }),
};
