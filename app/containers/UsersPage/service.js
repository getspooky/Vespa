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
 * @name HTTP_REQUEST_USERS
 * @returns {Promise<Response>}
 */
export async function HTTP_REQUEST_USERS() {
  const requestURL = binding['[GET]_USERS_API_BINDING'];
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
 * @name HTTP_DELETE_USERS
 * @param {number} id
 * @returns {Promise<Response>}
 */
export async function HTTP_DELETE_USERS(id) {
  const requestURL = binding['[DELETE_SHOW_PUT]_USERS_API_BINDING'].replace(':param',id);
  return await request(requestURL,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
