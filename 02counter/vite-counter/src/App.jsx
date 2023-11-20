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
    // or 
    // setCounter(counter) 
  }
  return (
    <>
     <h1>State in React</h1>
     <h2>counter : {counter }</h2>

    <button onClick={addValue}>Add value</button> 
    <br />
    <button >remove value</button>

    </>
  )
}

export default App
