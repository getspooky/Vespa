/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {combineReducers} from 'redux';
import {AUTH_REDUCER} from './shared/auth.reducer';
import {USERS_REDUCER} from './containers/UsersPage/reducer';
import {POSTS_REDUCER} from './containers/PostsPage/reducer';
import {USERS_PROFILE_REDUCER} from './containers/ProfilePage/reducer';
import {SETTINGS_REDUCER} from './containers/SettingsPage/reducer';

export const registerReducer = combineReducers({
  AUTH_REDUCER: AUTH_REDUCER,
  USERS_REDUCER: USERS_REDUCER,
  POSTS_REDUCER: POSTS_REDUCER,
  PROFILE_REDUCER: USERS_PROFILE_REDUCER,
  SETTINGS_REDUCER: SETTINGS_REDUCER
});
