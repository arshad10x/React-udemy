import React from "react";
import Data from "./Data";
function Pizza() {
  return (
    <>
      {Data.map((data1) => (
        <div>
          <h3>{data1.name}</h3>
          <img key={data1.id} src={data1.image} alt="/" />
          <p><strong>Ingredients: </strong>{data1.ingredients}</p>
          <p><strong>Price: </strong>{data1.price}</p>
          <p>{data1.soldOut}</p>
        </div>
      ))}
    </>
  );
}
export default Pizza;
