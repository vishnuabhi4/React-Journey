import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
    const myStyle = {
      background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,96,121,1) 28%, rgba(0,212,255,1) 100%)",
        height: "100vh",
        width:"100vw",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    return (
        <div style={myStyle}>
            <h1> geeksforgeeks </h1>
        </div>
    );
 
}

export default App
