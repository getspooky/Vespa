/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { GET_SETTINGS } from 'app/containers/SettingsPage/constants';
import {HTTP_REQUEST_SHOW_AUTH_USER, HTTP_REQUEST_UPDATE_AUTH_USER} from 'app/shared/auth.service';

/**
 * @async
 * @export
 * @function
 * @name GET_AUTH_USER_ACTION
 * @returns {Function}
 */
export function GET_AUTH_USER_ACTION() {
  return async (dispatch, getState) => {
    const response = await HTTP_REQUEST_SHOW_AUTH_USER();
    // Dispatch Action.
    dispatch({
      type: GET_SETTINGS,
      payload: await response,
    });
  };
}

/**
 * @export
 * @async
 * @function
 * @name UPDATE_SETTINGS_AUTH_USER_ACTION
 * @param {object} payload
 * @returns {Function}
 */
export function UPDATE_SETTINGS_AUTH_USER_ACTION(payload) {
  return async (dispatch, getState) => {
    const response = await HTTP_REQUEST_UPDATE_AUTH_USER(payload);
    // Dispatch Action.
    dispatch({
      type: GET_SETTINGS,
      payload: await response,
    });
  };
}
