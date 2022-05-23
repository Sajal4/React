// Step=1
import React from 'react';
import Button from './component/Button';
import Header from './component/Header';


class App extends React.Component{
// Javascript
constructor(){
  super();
  this.name="Sajal";
}
  getName () {
    return this.name;
  }

  render() {
    // Javascript(only const variable)
    const name= "Bilal";
    return(

      <div>
        
      </div>
    );
 }
}



export default App;
