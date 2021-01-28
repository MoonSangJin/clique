import React from 'react';
import { render } from 'react-dom';

import PopupContainer from './PopupContainer';
import GlobalStyle from './globalStyles';


const WithGlobalState = () => {
  return (
    <>
      <GlobalStyle />
      <PopupContainer />
    </>
  );
};

render(<WithGlobalState />, window.document.querySelector('#app-container'));
