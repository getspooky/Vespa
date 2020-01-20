/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {HTTP_REQUEST_USERS,HTTP_DELETE_USERS} from './service';
import {GET_USERS,DELETE_USERS} from './constants';

/**
 * @export
 * @async
 * @function
 * @name GET_USERS_ACTION
 * @returns {Function}
 */
export function GET_USERS_ACTION() {
  return async (dispatch, getState) => {
    const response = await HTTP_REQUEST_USERS();
    // Dispatch Action.
    dispatch({
      type: GET_USERS,
      payload: await response,
    });
  };
}

/**
 * @export
 * @async
 * @function
 * @name DELETE_USERS_ACTION
 * @param {number} id
 * @returns {Function}
 */
export function DELETE_USERS_ACTION(id) {
  return async (dispatch, getState) => {
    const response = await HTTP_DELETE_USERS(id);
    // Dispatch Action.
    dispatch({
      type: DELETE_USERS,
      payload: id,
    });
  };
}
