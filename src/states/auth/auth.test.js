import {
  vitest, describe, expect, it,
} from 'vitest';
import { getProfileThunkAction, handleLoginThunkAction, handleRegisterThunkAction } from './action';
import api from '../../services/api';
import { showLoading } from 'react-redux-loading-bar';

describe('auth action', () => {
  it('handle login thunk action', async () => {
    vitest.spyOn(api, 'login').mockResolvedValue({});
    await expect(api.login()).resolves.toBeTruthy();
    const dispatch = vitest.fn;

    handleLoginThunkAction({
      email: '',
      password: '',
    })(dispatch);

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOGIN_SUCCESS',
    });
  });

  it('handle register thunk action', async () => {
    vitest.spyOn(api, 'register').mockResolvedValue({});
    const dispatch = vitest.fn;

    await handleRegisterThunkAction({
      name: '',
      email: '',
      password: '',
    })(dispatch);

    await expect(api.register()).resolves.toBeTruthy();
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(showLoading);
  });

  it('get profile thunk action', async () => {
    vitest.spyOn(api, 'getOwnProfile').mockResolvedValue({});
    const dispatch = vitest.fn();

    await getProfileThunkAction()(dispatch);

    await expect(api.getOwnProfile()).resolves.toBeTruthy();
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_PROFILE',
      payload: {
        profile: {},
      },
    });
  });
});
