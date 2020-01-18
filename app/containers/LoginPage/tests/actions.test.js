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
import getLoginMock from 'internals/mocks/actions/getLoginMock';

// Actions to be tested
import {LOGIN_ACTION} from '../action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Login /> actions', () => {

  it('should dispatch Login action', async (done) => {

    const store = mockStore({ Auth: {} });

    store.dispatch(LOGIN_ACTION(getLoginMock)).then(() => {
      // return of async actions
      expect(store.getActions()).not.toBeNull();
    });

    done();

  });

});
