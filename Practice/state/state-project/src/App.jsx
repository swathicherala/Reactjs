import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let [message, setMessage] = useState("")
  const incrementValue = () => {
    setCount(prev => {
      if(prev<10){
        setMessage("")
        return prev + 1
      }else{
      setMessage("Counter cannot be more than 10")
      return prev
      }
    })
  }
  const decrementValue = () => {
    setCount(prev=>{
      if(prev>0){
        setMessage("")
        return prev - 1
      }else{
        setMessage("Counter cannot be less than 0")
        return prev
      }
    })
  }
  return (
    <>
      <div>
         <h3>Counte Value:{count}</h3>
         <h5 style={{ color: "red" }}>{message}</h5>
          <button onClick={incrementValue}>Increment Value</button>
          <button onClick={decrementValue}>Decrement Value</button>
      </div>
    </>
  )
}

export default App
