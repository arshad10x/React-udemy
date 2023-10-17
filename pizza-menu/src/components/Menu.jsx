import React from "react";
import Pizza  from "./pizza";
import Data from './Data'
function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
    
     <ul className="pizzas">
     {Data.map((pizza1)=>(
        <>
        <Pizza pizzaObj={pizza1} key={pizza1.name}/>
        <Pizza pizzaObj={pizza1} key={pizza1.name}/>

        </>
        
      ))}
     </ul>
     

    </div>
  );
}
export default Menu;

