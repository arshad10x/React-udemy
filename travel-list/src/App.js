import './App.css'

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 10, packed: false },
  { id: 3, description: "Charger", quantity: 2, packed: true },
  { id: 4, description: "Shorts", quantity: 4, packed: false },
];

export default function App(){
 return(
  <div className='app'>
  <Logo/>
  <Form/>
  <PackageList/>
  <Stats/>
  </div>
 )
}

function Logo(){
  return <h1>🌴 Far Away 🌴 </h1>
} 

function Form(){

  // function handleSubmit(e){
  //   e.preventDefault();

  // }
  return (
    <form className="add-form">
      <h3>What do you need for your 🐧 trip</h3>
      <select>
        {Array.from({length:20},(_,i)=>i+1).map(num=>
        <option value={num} key={num}>{num}</option>)}
      </select>
    <input type='text' placeholder='Item...'/>
    <button>Add</button>
    </form>
  )
}

function PackageList(){
  return(
  <div className="list">
    <ul>
      {initialItems.map((item)=>(
      <Item item={item} key={item.id}/>
      ))}
      </ul>
  </div>
  );
}

function Item({item}){
return(
  <li>
    <span style={item.packed ? {textDecoration:'line-through'} : {}}> {item.quantity} {item.description}</span>
   <button>❌</button>
  </li>
)
}

function Stats(){
  return(
    <footer className='stats'>
      <em>
        💼 You have x items on your list, and you already packed x (x%)
      </em> 
    </footer>
  )
}

