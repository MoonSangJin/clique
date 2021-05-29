import React from 'react';
import { render } from 'react-dom';


import ReactGa from 'react-ga';
import { GA_ID } from '../../Constants/ga';
import NotSignInPage from './Disable';


ReactGa.initialize(GA_ID);
ReactGa.ga('set', 'checkProtocolTask', null);

const App = () => {
  return (
    <>
      <NotSignInPage />
    </>
  );
};

render(<App />, window.document.querySelector('#app-container'));
