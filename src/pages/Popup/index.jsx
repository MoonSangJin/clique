import React from 'react';
import { render } from 'react-dom';

import PopupContainer from './PopupContainer';
import GlobalStyle from './globalStyles';

import ReactGa from 'react-ga';
import { GA_ID } from '../../Constants/ga';


ReactGa.initialize(GA_ID);
ReactGa.ga('set', 'checkProtocolTask', null);

const WithGlobalState = () => {
  return (
    <>
      <GlobalStyle />
      <PopupContainer />
    </>
  );
};

render(<WithGlobalState />, window.document.querySelector('#app-container'));
