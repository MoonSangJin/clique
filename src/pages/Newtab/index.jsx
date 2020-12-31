import React from 'react';
import { render } from 'react-dom';

import Newtab from './Newtab';
import './index.css';
import rootReducer from '../../Store';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: rootReducer,
});

render(
  <Provider store={store}>
    <Newtab />
  </Provider>
  , window.document.querySelector('#app-container'));
