import React from 'react';
import { render } from 'react-dom';

import PopupContainer from './PopupContainer';
import './index.css';

render(<PopupContainer />, window.document.querySelector('#app-container'));
