import { useState } from 'react'
import Landing from './Component/landing'
import {Routes, Route, Link} from 'react-router-dom'
import People from './Component/people'
import Planet from './Component/planet'

function App() {
  const [list, setList] = useState([])
  console.log(list);
  
  return (
    <>
     <Routes>
       <Route path='/' element= {<Landing setList = {setList}/>}/>
       <Route path='/data/:id' element= {<People  list = {list}/>}/>
       <Route path='/planet/:id' element= {<Planet  list = {list}/>}/>
     </Routes>

    </>
  )
}

export default App
