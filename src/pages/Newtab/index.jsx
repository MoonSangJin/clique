import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import NewTab from './Newtab';
import './index.css';
import rootReducer from '../../Store';
import { rootSaga } from '../../Store/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <NewTab />
  </Provider>,
  window.document.querySelector('#app-container')
);
