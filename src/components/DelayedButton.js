// Code DelayedButton Component Here
import React from 'react';
class DelayedButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
Lk:>
    onReceiveCoordinates = () => console.log([clientX,clientYk]);
    render() { 
        return ( 
            <button onClick={this.props.onReceiveCoordinates}> CoordinatesButton </button>
         );
    }
}
 
export default DelayedButton;