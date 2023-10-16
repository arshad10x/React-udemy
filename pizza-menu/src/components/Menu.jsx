import React from "react";
import Pizza from "./pizza";
// import img from "../pizza/focaccia.jpeg"
function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Funghi"
        ingedient="Tomato, mozarella, spinach, and ricotta cheese"
        // pimage={img}
        photoName={require("../pizza/focaccia.jpeg")}
        price="10"
      />
    </div>
  );
}
export default Menu;
