import React from 'react';
// Custom Component
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes'
import base from '../base';

class App extends React.Component {
    constructor (){
        super();

        this.addFish = this.addFish.bind(this);
        this.updateFish = this.updateFish.bind(this);
        this.removeFish = this.removeFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        this.removeFromOrder = this.removeFromOrder.bind(this);
        //gettinginitialState
        this.state = {
            fishes: {},
            order: {}
        };
    }

    componentWillMount(){

        // this runs right before the <App> is rendered
        this.ref = base.syncState(`${this.props.params.storeId}/fishes`
        , {
            context: this,
            state: 'fishes'
        });

        // check if there is any ref to localstorage
        const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

        if(localStorageRef){
            // update our App component's order state
            this.setState({
                order: JSON.parse(localStorageRef) // opp to JSON.stringify

                // shouldComponentUpdate to be used to avoid double rendering
            });
        }
    }

    componentWillUnMount(){
        base.removeBinding(this.ref);
    }

    componentWillUpdate(nextProps, nextState){
        // setting local storage
        localStorage.setItem(`order-${this.props.params.storeId}`,
        JSON.stringify(nextState.order)
        );
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

    // For the Inventory state binding
    updateFish(key, updatedFish){
        const fishes = {...this.state.fishes};
        fishes[key] = updatedFish;
        this.setState({ fishes });
    }

    removeFish(key){
        const fishes = {...this.state.fishes};
        fishes[key] = null;
        this.setState({ fishes });
    }    


    loadSamples(){
        this.setState({
            fishes: sampleFishes
        });
    }

    addToOrder(key){
    // take a copy of our state
    const order = {...this.state.order}
    //update the new no of fish ordered
    order[key] = order[key] + 1 || 1;
    // update our state
    this.setState({ order });
    }

    removeFromOrder(key){
        const order = {...this.state.order};
        delete order[key];
        this.setState({ order });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Jizz" />
                    <ul className="list-of-fishes">
                        {
                            Object
                            .keys(this.state.fishes)
                            .map(key => <Fish key={key} 
                            index={key}
                            details={this.state.fishes[key]}
                            addToOrder={this.addToOrder}
                            />)
                        }
                    </ul>
                </div>
                <Order fishes={this.state.fishes} 
                       order={this.state.order}
                       params={this.props.params}
                       removeFromOrder={this.removeFromOrder}
                />
                <Inventory loadSamples={this.loadSamples} 
                           addFish={this.addFish}
                           removeFish={this.removeFish}
                           fishes={this.state.fishes}
                           updateFish={this.updateFish}
                />

            </div>

        )
    }
}

App.propTypes = {
    params: React.PropTypes.object.isRequired
}

export default App;