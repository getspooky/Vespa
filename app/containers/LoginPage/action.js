/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {HTTP_REQUEST_LOGIN} from './service';
import {AUTH_LOGIN} from './constants';

/**
 * Login action.
 *
 * @export
 * @function
 * @name LOGIN_ACTION
 * @param payload
 * @returns {Function}
 */
export function LOGIN_ACTION(payload) {
  return async (dispatch, getState) => {
    const LOGIN_RESPONSE = await HTTP_REQUEST_LOGIN(payload);
    // Dispatch Action.
    dispatch({
      type: AUTH_LOGIN,
      payload: await LOGIN_RESPONSE,
    });
  };
}

