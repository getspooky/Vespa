/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {GET_USERS,DELETE_USERS} from './constants';

const initState = {
  Users: [],
};

/**
 * @export
 * @async
 * @function
 * @name USERS_REDUCER
 * @returns {Function}
 */
export function USERS_REDUCER(state = initState, {type, payload}) {
  switch (type) {
    case GET_USERS :
      state = {
        Users: [...payload]
      };
      break;
    case DELETE_USERS :
      state = {
        Users: state.Users.filter(({id})=>id !== payload)
      };
      break;
  }
  return state;
}
