import React from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './containers/App';

const target = document.querySelector('#root');

render(<App />, target);
