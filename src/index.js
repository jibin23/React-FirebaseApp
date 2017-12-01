import React from 'react';
// Just 1 method react from ReactDom
import { render } from 'react-dom';

//React Router
import { BrowserRouter, Match, Miss} from 'react-router';



// import master stylesheet
import './css/style.css';

import App from './components/App';
import StorePicker from './components/StorePicker';

// React Router
const Root = () =>{
    return(
        <BrowserRouter>
            //when at home -> StorePicker
            <Match exactly pattern="/" component={StorePicker}>
            </Match>
        </BrowserRouter>
    )
}


render(<App/>, document.querySelector('#main'));


