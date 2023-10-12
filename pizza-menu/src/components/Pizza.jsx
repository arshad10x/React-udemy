import React from "react";
import Data from './img'
function Pizza() {
 
  return (
<>
      {Data.map((data1)=>(
        <div>
<img key={data1.id} src={data1.image} alt="/"/>
<p>{data1.des}</p>
 {console.log(data1)};
 </div>
    )  )}
      
      </>
  );
}
export default Pizza;
