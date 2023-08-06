import Header from './components/Header';
import User from './components/User';
function App() {
  //Styling in react
  // const style ={
  //   color:'blue',
  //   backgroundColor:'black'
  // }
  // const var1='Expert';
  // const var2 = 'Developer'

  return (
    <div className="App">
      <Header/>
      {/* props */}
      <User name="John" position="Software Developer"/>
      <User name="Mark" position="UI Developer"/>
      <User name="Sara" position="Frontend Developer"/>
      
      {/* Template Literals*/}
      {/* <h1 style={style}>{`We are ${var1},${var2}`}</h1> */}
    </div>
  );
}

export default App;
