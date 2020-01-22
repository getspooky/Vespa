/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {GET_POSTS} from './constants';

const initState = {
  Posts: [],
};

/**
 * @export
 * @async
 * @function
 * @name POSTS_REDUCER
 * @returns {Function}
 */
export function POSTS_REDUCER(state = initState, {type, payload}) {
  switch (type) {
    case GET_POSTS :
      state = {
        Posts: [...payload]
      };
      break;
  }
  return state;
}
