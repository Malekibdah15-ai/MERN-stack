import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Color from './components/addColor'
import Blue from './components/color'

function App() {
  const [array, setArray] = useState(["yallow"]);

 

  return (
    <>
    <Color  setArray = {setArray} />
    <Blue Colors = {array} />

    </>
  )
}

export default App
