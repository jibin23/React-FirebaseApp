import React from 'react';
// Custom Component
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    render() {
        {/* Header, Order and Inventory are components to be made*/}
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header/>
                </div>
                <Order/>
                <Inventory/>

            </div>

        )
    }
}

export default App;