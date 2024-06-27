import {
  vitest, describe, expect, it,
} from 'vitest';
import { createCommentThunkAction, getThreadDetailThunkAction } from './action';
import api from '../../services/api';

describe('detail thread action', () => {
  it('get detail thread action', async () => {
    vitest.spyOn(api, 'getThreadDetail').mockReturnValue({
      name: 'ohayou',
    });
    const dispatch = vitest.fn();

    await getThreadDetailThunkAction(100)(dispatch);

    expect(api.getThreadDetail()).resolves.toBeTruthy();
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({
      type: 'GET_THREAD',
      payload: {
        name: 'ohayou',
      },
    });
  });

  it('create comment action', async () => {
    vitest.spyOn(api, 'createComment').mockReturnValue(({}));
    const dispatch = vitest.fn();

    await createCommentThunkAction({
      threadId: 100,
      content: 'ohayou',
    })(dispatch);

    expect(api.createComment()).resolves.toBeTruthy();
    expect(dispatch).toHaveBeenCalled();
  });
});
