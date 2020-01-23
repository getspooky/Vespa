/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {GET_SETTINGS,UPDATE_SETTINGS} from './constants';

const initState = {
  Settings: [],
};

/**
 * @export
 * @async
 * @function
 * @name SETTINGS_REDUCER
 * @returns {Function}
 */
export function SETTINGS_REDUCER(state = initState, {type, payload}) {
  switch (type) {
    case GET_SETTINGS :
      state = {
        Settings: {...payload}
      };
      break;
    case UPDATE_SETTINGS :
      state = {
        Settings: {...payload,...state.Settings}
      };
      break;
  }
  return state;
}
