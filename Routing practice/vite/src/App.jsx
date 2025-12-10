import { useState } from 'react'
import Home from './Component/home'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  
  return (
    <>
    <Routes>
      <Route path="/home/:word/:color/:bgcolor" element={< Home/>}/>
    </Routes>
     
    </>
  )
}

export default App
