import {useState,useEffect} from 'react';
export default function App(){
  
  const [advice, setAdvice] = useState("");
  const [count,setCount]=useState(0);
  async function getAdvice(){
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(e=>e+1);
  }
  useEffect(function(){
    getAdvice();
  },[])
  return (
  <>
    <h1>{advice}</h1>
    <button onClick={getAdvice}>Get Advise</button>
      <Message count={count}/>
  </>
  );
}

function Message(props){
  return (
   <p>
    Great!! you have read <strong>{props.count}</strong>peices of advice.
  </p>)
}