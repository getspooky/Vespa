/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import request from 'app/utils/request';
import binding from 'bindings/api.binding.json';

/**
 * @export
 * @async
 * @function
 * @name HTTP_REQUEST_POSTS
 * @returns {Promise<Response>}
 */
export async function HTTP_REQUEST_POSTS() {
  const requestURL = binding['[GET_POST]_POSTS_API_BINDING'];
  return await request(requestURL,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

/**
 * @export
 * @async
 * @function
 * @name HTTP_CREATE_POSTS
 * @param {object} payload
 * @returns {Promise<Response>}
 */
export async function HTTP_CREATE_POSTS(payload) {
  const requestURL = binding['[GET_POST]_USERS_API_BINDING'];
  return await request(requestURL,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload) // body data type must match "Content-Type" header
  });
}

