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
 * @async
 * @export
 * @function
 * @name HTTP_REQUEST_CREATE_POST
 * @param payload
 * @returns {Promise<Response>}
 */
export async function HTTP_REQUEST_CREATE_POST(payload) {
  const requestURL = binding['[GET_POST]_POSTS_API_BINDING'];
  return await request(requestURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: payload
  });
}
