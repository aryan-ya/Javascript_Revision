import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("black");

  
  return (
    <>
 <button onClick={() => setCount("red")}>click</button>
 <button onClick={() => setCount("blue")}>click me</button>

   <div className={`padding ${count}`}><h1>aryan</h1></div>

    </>
  )
}

export default App
