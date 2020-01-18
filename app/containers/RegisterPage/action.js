/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {HTTP_REQUEST_REGISTER} from './service';
import {AUTH_REGISTER} from './constants';

/**
 * Register action.
 *
 * @export
 * @function
 * @name REGISTER_ACTION
 * @param payload
 * @returns {Function}
 */
export function REGISTER_ACTION(payload) {
  return async (dispatch, getState) => {
    const REGISTER_RESPONSE = await HTTP_REQUEST_REGISTER(payload);
    // Dispatch Action.
    dispatch({
      type: AUTH_REGISTER,
      payload: await REGISTER_RESPONSE,
    });
  };
}

