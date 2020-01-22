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
  const requestURL = binding['[GET]_POSTS_API_BINDING'];
  return await request(requestURL,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

