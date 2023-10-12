import React from "react";
function Footer(){
    return (
      <div>
        {new Date().toLocaleDateString()}.
       We're currently open
      </div>
    )
  }
  export default Footer;