import React from "react";
import Pizza  from "./pizza";
import PizzaData from './Data'
function Menu() {
  const pizzas=PizzaData; 
  const numPizzas=pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>
    {numPizzas>0?(
     <ul className="pizzas">
     {pizzas.map((pizza1)=>(
        <Pizza pizzaObj={pizza1} key={pizza1.name}/>
      ))}
     </ul>
     ):(
      <p>We're still working on out menu. Please come back later:)</p>
     )}
    </div>
  );
}
export default Menu;

