/**
 * skenario test
 *
 * - auth reducer
 *   - should return the initial state
 *     - should return the initial state when no action is dispatched
 *   - should handle LOGIN_SUCCESS
 *     - should set isLogin to true when LOGIN_SUCCESS action is dispatched
 *   - should handle SET_PROFILE
 *     - should set profile when SET_PROFILE action is dispatched
 *   - should handle LOGOUT
 *     - should reset isLogin to false and clear profile when LOGOUT action is dispatched
 */

import { describe, expect, it } from 'vitest';
import authReducer from './reducer';
import api from '../../services/api';

describe('auth reducer', () => {
  const initState = {
    isLogin: !!api.getAccessToken(),
    profile: {},
  };

  it('should return the initial state', () => {
    expect(authReducer(initState, {})).toEqual(initState);
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      authReducer(initState, {
        type: 'LOGIN_SUCCESS',
      }),
    ).toEqual({
      ...initState,
      isLogin: true,
    });
  });

  it('should handle SET_PROFILE', () => {
    expect(
      authReducer(initState, {
        type: 'SET_PROFILE',
        payload: {
          profile: {},
        },
      }),
    ).toEqual({
      ...initState,
      profile: {},
    });
  });

  it('should handle LOGOUT', () => {
    expect(
      authReducer(initState, {
        type: 'LOGOUT',
      }),
    ).toEqual({
      ...initState,
      isLogin: false,
      profile: {},
    });
  });
});
