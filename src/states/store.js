import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/reducer';
import threadsAndUsersReducer from './threadsAndUsers/reducer';
import detailThreadReducer from './detailThread/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import { loadingBarReducer } from 'react-redux-loading-bar';

const store = configureStore({
  reducer: {
    auth: authReducer,
    threadsAndUsers: threadsAndUsersReducer,
    threadDetail: detailThreadReducer,
    loadingBar: loadingBarReducer,
    leaderboards: leaderboardsReducer,
  },
});

export default store;
