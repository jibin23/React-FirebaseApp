import React from 'react';
// Just 1 method react from ReactDom
import { render } from 'react-dom';

//React Router
import { BrowserRouter, Match, Miss} from 'react-router';



// import master stylesheet
import './css/style.css';

import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

// React Router
const Root = () =>{
    return(
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={StorePicker}/>
                <Match pattern="/store/:storeId" component={App}/>
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>
    )
}

render(<Root/>, document.querySelector('#main'));


