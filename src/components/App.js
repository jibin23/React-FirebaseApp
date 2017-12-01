import React from 'react';
// Custom Component
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    constructor (){
        super();

        this.addFish = this.addFish.bind(this);
        //gettinginitialState
        this.state = {
            fishes: {},
            order: {}
        };
    }

    addFish(fish){
        //update our state
        const fishes = {...this.state.fishes};
        // add in our new fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish; // from AddFishForm
        // set state
        this.setState({ fishes: fishes })
    }

    render() {
        {/* Header, Order and Inventory are components to be made*/}
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Jizz" />
                </div>
                <Order/>
                <Inventory addFish={this.addFish}/>

            </div>

        )
    }
}

export default App;