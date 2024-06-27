import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it } from 'vitest';
import Leaderboards from './Leaderboard';
import store from '../states/store';

describe('Leaderboards', () => {
  it('should render correctly', () => {
    const component = render(
      <Provider store={store}>
        <Leaderboards />
      </Provider>,
    );
    expect(component).toBeTruthy();
  });
});
