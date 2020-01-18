/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import getRegisterMock from 'internals/mocks/actions/getRegisterMock';

// Actions to be tested
import {REGISTER_ACTION} from '../action';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Register /> actions', () => {

  it('should dispatch REGISTER action', async (done) => {

    const store = mockStore({ Auth: {} });

    store.dispatch(REGISTER_ACTION(getRegisterMock)).then(() => {
      // return of async actions
      expect(store.getActions()).not.toBeNull();
    });

    done();

  });

});
