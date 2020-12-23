import React from 'react';
import { render } from 'react-dom';

import Newtab from './Newtab'; //원래 Newtab으로 시작했음.
import './index.css';

render(<Newtab />, window.document.querySelector('#app-container'));
