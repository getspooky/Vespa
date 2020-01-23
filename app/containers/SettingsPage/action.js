/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {HTTP_REQUEST_UPDATE_USER} from './service';
import {GET_SETTINGS} from './constants';

/**
 * @export
 * @async
 * @function
 * @name GET_SETTINGS_ACTION
 * @param {number} id
 * @param {object} payload
 * @returns {Function}
 */
export function UPDATE_SETTINGS_ACTION(id,payload) {
  return async (dispatch, getState) => {
    const response = await HTTP_REQUEST_UPDATE_USER(id,payload);
    // Dispatch Action.
    dispatch({
      type: GET_SETTINGS,
      payload: await response,
    });
  };
}
