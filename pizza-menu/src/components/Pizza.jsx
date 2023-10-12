import React from "react";
import Data from "./img";
function Pizza() {
  return (
    <>
      {Data.map((data1) => (
        <div>
          
          <img key={data1.id} src={data1.image} alt="/" />
          <h3>{data1.des}</h3>
        </div>
      ))}
    </>
  );
}
export default Pizza;
