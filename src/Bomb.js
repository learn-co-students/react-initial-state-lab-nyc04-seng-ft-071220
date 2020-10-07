import React from 'react';

class Bomb extends React.Component {
    state = { 
        
        secondsLeft: this.props.initialCount
     }
    render() { 
        let boom = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`
        return ( <h1>{boom}</h1> );
    }
}
 
export default Bomb;