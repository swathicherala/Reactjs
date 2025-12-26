import { useState } from "react"
function App() {
  let [counter, setCounter] = useState(0)
  let [countStr, setCountStr] = useState("")

  const addValue = () => {
    if(counter<20){
      counter = counter + 1
      setCounter(counter)
    }else{
      setCountStr('Counter should be less than 20')
    }
    
  }
  const removeValue = () => {
    if(counter>0){
      setCounter(counter - 1)
    }else{
      setCountStr('Counter should be more than 0')
    }
  }
  return(
    <>
      <div>
        <h2>Counter value : {counter}</h2>
        <h3>{countStr}</h3>
        <button onClick={addValue}>Add Value</button>
        <br/>
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  )
}

export default App
