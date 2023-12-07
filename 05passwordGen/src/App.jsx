import { useState } from 'react'
import './App.css'

const [length, setLength] = useState(8)
const [numberAllowed, setNumberAllowed] = useState(false)
const [characterAllowed, setCharactersAllowed] = useState(false)
cosst [password, setPassword] = useState(" ")

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3 '
        />
        </div>
      </div>
    </>
  )
}

export default App
