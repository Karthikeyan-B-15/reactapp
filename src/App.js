import './App.css';


function App(props) {
 const  action=()=>{
    document.querySelector('h1').innerText=props.text;
    
  }

  return (
    <div>
      <h1 class="App">Welcome Developers!<span></span></h1>
    <button onClick={action}>Click me</button>
    </div>
    

  );
}

export default App;
