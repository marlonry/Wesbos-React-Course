import React from 'react';
import {getFunName} from '../helpers';

export default class StorePicker extends React.Component {
    constructor(props) {
        super(props);
        this.myInput = React.createRef();
        // this.state = {
        //     message: 'Hello there',
        // }

        // this.goToStore = this.goToStore.bind(this); // binding methods when using this
    }

    //myInput = React.createRef(); // this can be done as property with the funky syntax or can be set on the constructor as an attribute

    goToStore = (e) => {
        //1. stop form subsmission
        e.preventDefault();
        //2. get the text from that input
        const storeName = (this.myInput.current.value);
        //3. change the page to /store/whateever they entered
        this.props.history.push(`/store/${storeName}`); // this history.push() method can only be accessed because store picker inhetits all the methods of its parents via props in this case the parent is the router
    }

    render() {
        // return React.createElement('p', { id: 'paragraph', className: 'paragraph'}, 'Hello there' );
        // return only one element out a render or use react.fragment or <> </> empty tags for adjacent elements
        return ( 
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2> Please enter a store </h2>
                <input 
                    type= "text" 
                    ref={this.myInput} 
                    required 
                    placeholder="Enter a store name" 
                    defaultValue={getFunName()}/>
                <button type="submit"> Visit Store -> </button> 
            </form>
        );
    }
}