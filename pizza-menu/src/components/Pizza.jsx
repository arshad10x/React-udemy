// import React from "react";
// import Data from "./Data";
// function Pizza() {
//   return (
//     <div className="pizza">
//       {Data.map((data1) => (
//         <div >
//           <div className="imgStyle">
//           <img key={data1.id} src={data1.image} alt="/"  />
//           </div>
//           <h3>{data1.name}</h3>
//           <p>{data1.ingredients}</p>
//           <p>{data1.price+3+'$'}</p>
//         </div>
//       ))}
    
//     </div>
//   );
// } 
// export default Pizza;


//passing as props  
import React from "react";
function Pizza({pizzaObj}){

  // if(pizzaObj.soldOut) return null;
  return(
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
     <img src={pizzaObj.image} alt={pizzaObj.name}/>
      <div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>

      <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
    </div>
    </li>
  )
}
export default Pizza;