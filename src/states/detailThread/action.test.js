/**
 * skenario test
 *
 * - detail thread action
 *   - get detail thread action
 *     - should dispatch action correctly when data fetching success
 *     - should handle errors correctly when data fetching fails
 *   - create comment action
 *     - should dispatch action correctly when creating comment
 *     - should handle errors correctly when creating comment fails
 */

import {
  vitest, describe, expect, it,
} from 'vitest';
import { createCommentThunkAction, getThreadDetailThunkAction } from './action';
import api from '../../services/api';

describe('detail thread action', () => {
  it('get detail thread action', async () => {
    vitest.spyOn(api, 'getThreadDetail').mockReturnValue(Promise.resolve({
      name: 'ohayou',
    }));
    const dispatch = vitest.fn();

    await getThreadDetailThunkAction(100)(dispatch);

    await expect(api.getThreadDetail()).resolves.toBeTruthy();
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({
      type: 'GET_THREAD',
      payload: {
        name: 'ohayou',
      },
    });
  });

  it('create comment action', async () => {
    vitest.spyOn(api, 'createComment').mockReturnValue(Promise.resolve({}));
    const dispatch = vitest.fn();

    await createCommentThunkAction({
      threadId: 100,
      content: 'ohayou',
    })(dispatch);

    await expect(api.createComment()).resolves.toBeTruthy();
    expect(dispatch).toHaveBeenCalled();
  });
});
