// import logo from './logo.svg';
import './App.css';
import { useReducer} from 'react';
const initialState=0;
const reducer=(state,action)=>{
  console.log(state,action);
  if(action.type==="Increment"){
    return state+1;
  }
  if(action.type==="Decement"){
    return state-1
  }
return state;
}
function App() {
  //const [count,setCount]=useState(0);
   const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <>
    <div className="App">
    {/* //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a */}
    {/* //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
     */}
    <h1>{state}</h1>
<button onClick={()=>dispatch({type:"Increment"})}>Increment</button><br></br>
   <button onClick={()=>dispatch({type:"Decement"})}>Decerment</button>
    </div>
    </>
    
    
  );
}

export default App;
