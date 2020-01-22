/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {HTTP_REQUEST_POSTS} from './service';
import {GET_POSTS} from './constants';

/**
 * @export
 * @async
 * @function
 * @name GET_POSTS_ACTION
 * @returns {Function}
 */
export function GET_POSTS_ACTION() {
  return async (dispatch, getState) => {
    const response = await HTTP_REQUEST_POSTS();
    // Dispatch Action.
    dispatch({
      type: GET_POSTS,
      payload: await response,
    });
  };
}
