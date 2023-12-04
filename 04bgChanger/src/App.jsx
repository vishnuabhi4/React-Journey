import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <>
  <div className="min-h-screen w-full duration-200"
  style={{backgroundColor:color}}
  ></div>
    </>
  );
}

export default App;
