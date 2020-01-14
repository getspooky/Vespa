/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import {registerReducer} from '../reducer';

const middleware = [thunk];

export function configureStore(initialState = {}) {
  // If Redux Dev Tools Extensions is installed, enable them.
  if(process.env === 'dev')
    middleware.push( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  // Create the store.
  return createStore(
    registerReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}

