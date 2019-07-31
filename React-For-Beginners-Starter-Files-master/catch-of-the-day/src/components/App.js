import React from 'react'
import Inventory from './Inventory';
import Order from './Order';
import Header from './Header';
 
export default class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };
    addFish = fish => {
        // 1. take a copy of existing state // never mutate the state
        const fishes = { ...this.state.fishes }; // spread
        //const fishes = Object.assign({}, this.state.fishes); oobject.assign

        // 2. add out new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish; 

        // 3. ser the new fishes object to state
        this.setState({ fishes });
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                </div> 
                <Inventory addFish={this.addFish}/>
                <Order />
            </div>
        )
    }
}
 