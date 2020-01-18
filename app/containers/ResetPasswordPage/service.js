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
 * Send reset password request to the application.
 *
 * @export
 * @function
 * @name HTTP_REQUEST_RESET_PASSWORD
 * @param payload
 * @returns {Promise<Response>}
 */
export async function HTTP_REQUEST_RESET_PASSWORD(payload) {
  const requestURL = binding['[PUT]_RESET_PASSWORD_API_BINDING'];
  return await request(requestURL,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: payload
  });
}

