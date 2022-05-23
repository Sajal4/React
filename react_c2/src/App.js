// component with normal function syntax

// component => js logic(business logic) and user Interface (HTML [JSX])
// JSX can have only one parent element
// ES5

// function App() {
//   const name = "sajal debnath";
//   function getName(){
//     console.log(name);
//   }
//   getName();

//   return(
//     <div>
//       <div>Div1</div>
//       <div>Div2</div>
//     </div>
//   );
// }


// Es6
// const App=()=>{
//   const name = "sajal debnath";
//   function getName(){
//     console.log(name);
//   }
//   getName();

//   return(
//     <div>
//       <div>Div1</div>
//       <div>Div2</div>
//     </div>
//   )
// }


// export default App;



import React from 'react';
import Header from './component/Header'
import Footer from './component/Footer';
import Card from './component/Card';
import { ProductArray } from './helper';

import './style.css'

const App =()=> {

  return (
    <div >
      <Header/>
      <div className="program_section">
        {ProductArray.map((prod)=>(
          <Card
                image={prod.imgSrc} 
                price={prod.price}
                prductName= {prod.product}/>
        ))}
      
      </div>
      <Footer />
    </div>
  );
};

export default App;


