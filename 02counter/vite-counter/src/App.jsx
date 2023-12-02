import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // let counter = 0;

  let addValue = () => {
    console.log('value added', counter)
    // counter = counter + 1;
    setCounter(counter + 1) 
    setCounter(counter + 1) 
    setCounter(counter + 1) 
    setCounter(counter + 1) 
    setCounter(counter + 1) 
    setCounter(counter + 1) 
    setCounter(counter + 1) 
    /*
     calling multiple state update functions (e.g., multiple 
      setCounter calls) within the same synchronous block of code 
     will not cause the state updates to happen multiple times.
    */
    // or 
    // setCounter(counter) 
  }
  let removeValue = () =>{
    console.log('removed');
    if(counter >= 1){
      setCounter(counter - 1)
    }
  }
  return (
    <>
     <h1>State in React</h1>
     <h2>counter : {counter }</h2>

    <button onClick={addValue}>Add value</button> 
    <br />
    <button onClick={removeValue} >remove value</button>

    </>
  )
}

export default App
