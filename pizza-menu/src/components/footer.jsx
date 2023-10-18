import React from "react";
import Order from './Order'
function Footer(){

  const hour= new Date().getHours();
  const openHour=9;
  const closeHour=23;
  const isOpen=hour >=openHour && hour <= closeHour;
  console.log(isOpen)

  // if(hour >=openHours && hour <= closeHourse) alert(`We're currently open`)
  // else alert('Sorry we are closed')
    return (
      // <div className="footer">
      //   We're currently open
      //   {new Date().toLocaleDateString()}.
      // </div>

<footer className="footer">
{isOpen ? (
  <Order closeHour={closeHour} openHour={openHour} />
) : (
  <p>
    We're happy to welcome you between {openHour}:00 and {closeHour}:00.
  </p>
)}
</footer>
    )
  }
  export default Footer;