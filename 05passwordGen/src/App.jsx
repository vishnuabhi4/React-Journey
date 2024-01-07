import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);
  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";                       // Checking if numbers are allowed, then adding them to the string
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";                 // Checking if special characters are allowed, then adding them to the string
  
    for (let i = 1; i <= length; i++) {                           // Generating the password of the specified length
      let char = Math.floor(Math.random() * str.length + 1);      // Generating a random character index within the string length
       pass += str.charAt(char);                                  // Adding the randomly chosen character to the password string
    }
    setPassword(pass);                                            // Setting the generated password using the 'setPassword' function
  }, [length, numberAllowed, charAllowed, setPassword]);

  
const copyPasswordToClipboard = useCallback(() => {               // Defining a function named copyPasswordToClipboard using useCallback
  
  passwordRef.current?.select();                                  // Selects the content in the passwordRef element if it exists
  
  passwordRef.current?.setSelectionRange(0, 999);                 // Sets the selection range from index 0 to 999 in passwordRef element if it exists  
  
  window.navigator.clipboard.writeText(password);                 // Writes the password value to the system clipboard using the Clipboard API
}, [password]);                                                   // Depends on the 'password' variable


  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
