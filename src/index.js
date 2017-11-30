import React from 'react';
// Just 1 method react from ReactDom
import { render } from 'react-dom';

// import master stylesheet
import './css/style.css';

import App from './components/App';
import StorePicker from './components/StorePicker';

render(<App/>, document.querySelector('#main'));