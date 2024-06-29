/**
 * skenario test
 *
 * - detailThreadAction
 *   - get detail thread action
 *     - should dispatch action correctly when data fetching success
 *   - create comment action
 *     - should dispatch action correctly when creating comment
 */

const initState = {
  thread: {},
  created: false,
};

const detailThreadReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_THREAD':
      return {
        ...state,
        thread: action.payload,
        created: false,
      };
    case 'COMMENT_CREATED':
      return {
        ...state,
        created: true,
      };
    default:
      return state;
  }
};

export default detailThreadReducer;
