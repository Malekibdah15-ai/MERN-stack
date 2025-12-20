import { useState } from 'react'
import {Routes, Route, Link} from "react-router-dom"
import AddTeam from './component/form'
import List from './component/list'
import Gaming from './component/Game'
function App() {

  return (
    <>
     <Routes>
      <Route  path='/add' element = {<AddTeam/>}/>
      <Route path='/' element = {<List/>}/>
      <Route path = '/status/game/:id' element = {<Gaming/>}/>
     </Routes>
    </>
  )
}

export default App
