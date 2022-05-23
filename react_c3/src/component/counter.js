import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            counter: 0,
            greeting: 'Hello, Welcome',
        }
    };
    // this.increment = this.increment.bind(this);
}

increment(){
    this.setState({
        counter: this.state.counter +1,
    });
}
decrement(){
    this.setState({
        counter: this.state.counter -1,
    });
}

updateGreeting(){
    this.setState(){
        greeting: `Hello, (this.state.counter > 0 ? "Positive number" : "Negative number")`
    }
}

render(){
    return(
        <div>
            <h1>{this.state.greeting}</h1>
            <p>{this.state.counter}</p>
        <button onClick={thgis.increment}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
        <button onClick={this.updateGreeting}>Update</button>
        </div>
    )
}

export default Counter;
