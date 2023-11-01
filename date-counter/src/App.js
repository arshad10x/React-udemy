import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const [step,setStep]=useState(1)
  const date = new Date("Oct 30 2023");
  date.setDate(date.getDate() + counter);
  return (
    <div>
      <div>
        <button onClick={() => setStep((e) => e - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((e) => e + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCounter((e) => e - step)}>-</button>
        <span>Count: {counter}</span>
        <button onClick={() => setCounter((e) => e + step)}>+</button>
      </div>
      <p>   
        <span>
          {counter === 0
            ? "Today  is"
            : counter > 0
            ? `${counter} days from today is `
            : `${Math.abs(counter)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}