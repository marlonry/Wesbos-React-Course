import React from 'react';

export default class StorePicker extends React.Component {
    constructor(props) {
        super(props);   
        this.state = {
            message: 'Hello there',
        }
    }

    render() {
        // return React.createElement('p', { id: 'paragraph', className: 'paragraph'}, 'Hello there' );
        // return only one element out a render or use react.fragment or <> </> empty tags for adjacent elements
        return (
            <form action="" className="store-selector">
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Enter a store name"/>
                <button type="submit">Visit Store -></button>
            </form>
        );
    }
}