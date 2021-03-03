import React from 'react';
import { render } from 'react-dom';

import PopupContainer from './PopupContainer';

import ReactGa from 'react-ga';
import { GA_ID } from '../../Constants/ga';


ReactGa.initialize(GA_ID);
ReactGa.ga('set', 'checkProtocolTask', null);

const App = () => {
  return (
    <>
      <PopupContainer />
    </>
  );
};

render(<App />, window.document.querySelector('#app-container'));
