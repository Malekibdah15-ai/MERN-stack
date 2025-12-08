import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from "./components/Landing"
import Login from "./components/Login"

function App() {
  const [select, setSelect] = useState("")
  

  return (
    <div style={{backgroundColor: select}}>
      <Landing/>
      <Login/>
      <Se setSelect={setSelect} select={select}/>
    </div>
  )
}

function Se({setSelect,select}){

const handleSelect = (e)=>{
  const vall = e.target.value;
  setSelect(vall);
}
  return(
    <>
    <div>
        <select name="" value={select} onChange={handleSelect} id="">
          <option value="orange">orange</option>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="yallow">yallow</option>
          </select>
        </div>
    
    </>
  );
}

export  {App}
