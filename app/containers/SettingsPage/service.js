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
 *
 * @export
 * @function
 * @name HTTP_REQUEST_SHOW_USER
 * @param {number} id
 * @returns {Promise<Response>}
 */
export async function HTTP_REQUEST_SHOW_USER(id) {
  const requestURL = binding['[DELETE_SHOW_PUT]_USERS_API_BINDING'].replace(':param',id);
  return await request(requestURL,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

/**
 *
 * @export
 * @function
 * @name HTTP_REQUEST_UPDATE_USER
 * @param {number} id
 * @param {object} payload
 * @returns {Promise<Response>}
 */
export async function HTTP_REQUEST_UPDATE_USER(id,payload) {
  const requestURL = binding['[DELETE_SHOW_PUT]_USERS_API_BINDING'].replace(':param',id);
  return await request(requestURL,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
}

