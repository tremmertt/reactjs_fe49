import React, { Component } from 'react';
import Child from './Child';

class Styling extends Component {
    render() {
        return (
            <div>
                <h1 className="title"> Hello </h1>
                <Child />
            </div>
        );
    }
}

export default Styling;