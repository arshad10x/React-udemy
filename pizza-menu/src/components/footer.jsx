import React from "react";
function Footer(){

  const hour= new Date().getHours();
  const openHours=9;
  const closeHourse=23;
  const isOpen=hour >=openHours && hour <= closeHourse;
  console.log(isOpen)

  // if(hour >=openHours && hour <= closeHourse) alert(`We're currently open`)
  // else alert('Sorry we are closed')
    return (
      <div className="footer">
        We're currently open
        {new Date().toLocaleDateString()}.
      </div>
    )
  }
  export default Footer;