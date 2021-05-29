import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import NewTab from './Newtab';
import rootReducer from '../../Store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import ReactGa from 'react-ga';
import { GA_ID } from '../../Constants/ga';



const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), ],
});
const persistor = persistStore(store);

ReactGa.initialize(GA_ID);
ReactGa.ga('set', 'checkProtocolTask', null);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NewTab />
    </PersistGate>
  </Provider>,
  window.document.querySelector('#app-container')
);
