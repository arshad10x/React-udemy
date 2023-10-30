import { useState } from 'react';
import './App.css';


export default function App() {
  return (
    <div>
    <Counter/>
    </div>
  );
}

function Counter(){
  const [counter,setCounter]=useState(0)

  return(
    <div>
      <button onClick={()=>setCounter(e=>e-1)}>-</button>
      <span>Count: {counter}</span>
      <button onClick={()=>setCounter(e=>e+1)}>+</button>
      <span>Count: {counter}</span>
      

    </div>
  )
} 