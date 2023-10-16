// import React from "react";
// import Data from "./Data";
// function Pizza() {
//   return (
//     <>
//       {Data.map((data1) => (
//         <div>
//           <h3>{data1.name}</h3>
//           <img key={data1.id} src={data1.image} alt="/" />
//           <p>{data1.ingredients}</p>
//           <p>{data1.price}</p>
//         </div>
//       ))}
//     </>
//   );
// }
// export default Pizza;


//passing as props
import React from "react";
function Pizza(props){
  return(
    <div>
      <div>
     <img src={props.photoName} alt={props.pimage}/></div>
      <h3>{props.name}</h3>
      <p>{props.ingedient}</p>
      {console.log(props.pimage)}
    </div>
  )
}
export default Pizza