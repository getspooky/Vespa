/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {AUTH_REGISTER} from 'app/containers/RegisterPage/constants';
import {AUTH_LOGIN} from '../containers/LoginPage/constants';

const initState = {
  Auth: {
    isAuthenticated: false,
    // Get token from localStorage.
    token: localStorage.getItem('_token'),
  },
};

/**
 * @export
 * @function
 * @name AUTH_REDUCER
 * @param state
 * @param type
 * @param payload
 * @returns {object}
 */
export function AUTH_REDUCER(state = initState, {type, payload}) {
  switch (type) {
    case AUTH_LOGIN :
    case AUTH_REGISTER:
      state = {
        Auth: {isAuthenticated: true, token: payload.data},
      };
      break;
  }
  return state;
}
