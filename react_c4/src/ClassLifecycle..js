import React from "react";

class ClassLifecycle extends React.Component{
    constructor(props){
        console.log('Constructor');
        super();
        this.state = {
            counter:0;
        }

        this.increment =()=> this.setState({counter: this.state.counter +1})
        this.decrement =()=> this.setState({counter: this.state.counter -1})
    }

    componentDidMount() {
        console.log('component Did mount' ,this);
        console.log(document.getElementById('root'));
        console.log('---------------');
    }
    



    render(){
        console.log('Render');
        return(
            <div>
                <h1>
                    Class component Lifecycle Method
                </h1>
                <h1>
                    {this.state.counter}
                </h1>
                <h1></h1>
            </div>
        )
    }


}
