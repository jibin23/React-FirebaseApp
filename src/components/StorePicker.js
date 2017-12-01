import React from 'react';
import { getFunName } from '../helpers'; // external export class


class StorePicker extends React.Component {
    
    // constructor(){
    //     super();
    //     this.goToStore = this.goToStore.bind(this)
    // }
    
    // 'this' won't work here
    goToStore(event){
        event.preventDefault();
        console.log(
            "You change the URL"
        );
        const storeId = this.storeInput.value;
        console.log(`Going to ${storeId}`)
        // grab the text from the box

        // react routing to each store
        this.context.router.transitionTo(`/store/${storeId}`);
    }


    // this works here
    render() {
        {/* This is a JSX comment */}
        {/* Comment cannot be put in the JSX return, above the element*/}
        return (
            <form className="store-selector" onSubmit={this.goToStore.bind(this)}>

                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" 
                defaultValue={getFunName()} ref={ (input) => { this.storeInput = input}} />
                <button type="submit"> Visit Store </button>
            </form>

        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;