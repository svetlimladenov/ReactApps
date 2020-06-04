import React, {useState} from 'react'
import { render } from '@testing-library/react';

// function Button(){
//     const [counter, setCounter] = useState(1);
//     return(
//         <React.Fragment>
//             <button className="btn" onClick={() => setCounter(counter*2)}>+</button>
//             <h1 className="header">{counter}</h1>
//         </React.Fragment>
//     )
// }

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            changer : 1
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        this.setState(state => ({
            count : state.count + state.changer
        }))
    }

    decrement(){
        this.setState(state => ({
            count : state.count - state.changer
        }))
    }

    render() {
        return (
            <React.Fragment>
                <h1>Current Number {this.state.changer}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <h1 className="header">{this.state.count}</h1>
            </React.Fragment>
        );
    }

}

export default Button;