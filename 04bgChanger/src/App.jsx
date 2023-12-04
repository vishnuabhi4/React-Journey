import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <>
      <div
        className="min-h-screen w-full duration-200 flex-auto"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
          <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl">
            <button
            onClick={()=>{setcolor("red")}}
              className="outline-none px-4 py-1 rounded-full"
              style={{background:"red"}}
            >Red</button>
            <button
            onClick={()=>{setcolor("blue")}}
              className="outline-none px-4 py-1 rounded-full"
              style={{background:"blue"}}
            >Blue</button>
            <button
            onClick={()=>{setcolor("green")}}
              className="outline-none px-4 py-1 rounded-full"
              style={{background:"green"}}
            >Green</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
