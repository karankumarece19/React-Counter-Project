import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(0)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  
  return (
    <>
      <h1>React Simple Counter</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Increase Value </button> 
      <br /><br/>
      <button
      onClick={removeValue}
      >Decrease Value </button>
    
    </>
  )
}

export default App