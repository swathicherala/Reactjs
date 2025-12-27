import './App.css'
import UserCard from './UserCard'
import { useState } from "react";


function App() {
const [status, setStatus] = useState("Online")
const updateStatus = () =>{
  setStatus(status === "Online"?"Offline":"Online")
}
   
  return (
    <>
    <h1>Hello</h1>
    {/* <UserCard name="Swathi" role="Fullstack Developer" isOnLine={true}/>
    <UserCard name="Sachin" role="Buisness Man" isOnLine={true} /> */}
    <h2>Current Status: {status}</h2>
    <UserCard updateStatus={updateStatus}/>
    </>
  )
}

export default App
