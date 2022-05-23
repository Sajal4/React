import React, {Component} from 'react'


class Button extends Component{

constructor(props){
  super(props);   //class from blueprint to allocating memory.
  this.name = 'Something'
}

render(){
  console.log(this);

  return (
    <button className={`custom_btn ${this.props.className}`}>{this.props.buttonText}</button>
  );
}
}


export default Button;