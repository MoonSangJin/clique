import React from 'react';
import { render } from 'react-dom';

import Newtab from './Newtab'; //원래 Newtab으로 시작했음.
import App from '../../Components/App'; //Create react app처럼 App에서 시작한다.
import './index.css';

render(<App />, window.document.querySelector('#app-container'));
