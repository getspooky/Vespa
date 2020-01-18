/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {AUTH_REDUCER} from 'app/shared/auth.reducer';
import {AUTH_LOGIN} from '../constants';

describe('<Login /> reducers', () => {

  it('should return the default reducer state', () => {

    const action = { type: 'default_action' , payload :{} };
    const initialState = {
      Auth:{
        isAuthenticated: false,
        // Get token from localStorage.
        token: null,
      }
    };

    expect(AUTH_REDUCER(undefined, action)).toEqual(initialState);

  });

  it('should return the correct reducer state', () => {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTIzM2JhNmRkYWRmMDNmYWM3YzE3NTUiLCJlbWFpbCI6Inlhc3Nlci0tNUBob3RtYWlsLmZyIiwiaWF0IjoxNTc5MzY3MzM0LCJleHAiOjE1NzkzODUzMzR9.BsXT0_UB3l9l90C6nR4gbwGIQ33I82X56-jg3RsNQgk';

    const action = {
      type: AUTH_LOGIN ,
      payload: {
        data: token
      }
    };
    const expectedState = {
      Auth: {
        isAuthenticated: true,
        token
      }
    };

    expect(AUTH_REDUCER(undefined, action)).toEqual(expectedState);

  });

});
