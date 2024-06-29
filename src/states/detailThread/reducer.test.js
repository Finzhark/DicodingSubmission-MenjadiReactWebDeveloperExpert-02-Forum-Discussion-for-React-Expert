/**
 * skenario test
 *
 * - detailThreadReducer
 *   - should return the initial state
 *   - should handle "GET_THREAD"
 *   - should handle "COMMENT_CREATED"
 */

import { describe, expect, it } from 'vitest';
import detailThreadReducer from './reducer';

describe('thread detail reducer', () => {
  const initState = {
    thread: {},
    created: false,
  };

  it('should return the initial state', () => {
    expect(detailThreadReducer(undefined, {})).toEqual(initState);
  });

  it('should handle "GET_THREAD"', () => {
    expect(
      detailThreadReducer(initState, {
        type: 'GET_THREAD',
        payload: {
          name: 'ohayou',
        },
      }),
    ).toEqual({
      ...initState,
      thread: {
        name: 'ohayou',
      },
    });
  });

  it('should handle "COMMENT_CREATED"', () => {
    expect(
      detailThreadReducer(initState, {
        type: 'COMMENT_CREATED',
      }),
    ).toEqual({
      ...initState,
      created: true,
    });
  });
});
