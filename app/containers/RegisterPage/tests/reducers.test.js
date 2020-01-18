/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {AUTH_REDUCER} from 'app/shared/auth.reducer';
import {AUTH_REGISTER} from '../constants';

describe('<Register /> reducers', () => {

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

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTIwZDIwNTI1MWJhZDJjYWE5MzNhYzMiLCJlbWFpbCI6ImdldHNwb29reWRldkBnbWFpbC5jb21zZHNkc2QiLCJpYXQiOjE1NzkyMDkyMjEsImV4cCI6MTU3OTIyNzIyMX0.bCLp6jCNshD8eoKKBIrJpNVSbM-m3OrfhpKIyririIU'

    const action = {
      type: AUTH_REGISTER ,
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
