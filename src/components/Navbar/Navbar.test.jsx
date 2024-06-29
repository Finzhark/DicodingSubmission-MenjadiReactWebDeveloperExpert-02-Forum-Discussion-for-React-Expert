/**
 * skenario test
 *
 * - Navbar
 *   - should render correctly
 *   - should contain expected links
 *   - should show logged in user when user is logged in
 *   - should show login button when user is not logged in
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Navbar from './Navbar';
import store from '../../states/store';

describe('Navbar', () => {
  it('should render correctly', () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>,
    );
    expect(component).toBeTruthy();
  });
});
