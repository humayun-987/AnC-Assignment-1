import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  useEffect(() => {
    const timer = setTimeout(()=>{
      setCount(count+1)
    },1000)

    return () => {
      clearTimeout(timer)
    }
  }, [count])
  
  return (
    <>
      <div className="myMain">
        <div className="counter">{count}</div>
        <div className="manual">
          <button onClick={()=>{setCount(count+1)}}>+</button>
          <button onClick={()=>{setCount(count-1)}}>-</button>
        </div>
      </div>
    </>
  )
}

export default App
