import React from "react";
function Footer(){

  const hour= new Date().getHours();
  const openHours=8;
  const closeHourse=12;

  if(hour >=openHours && hour <= closeHourse) alert(`We're currently open`)
  else alert('Sorry we are closed')
    return (
      <div>

        {/* {new Date().toLocaleDateString()}.
       We're currently open */}
       
      </div>
    )
  }
  export default Footer;