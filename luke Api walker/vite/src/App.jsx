import { useState } from 'react'
import Landing from './Component/landing'
import {Routes, Route, Link} from 'react-router-dom'
import People from './Component/people'

function App() {
  const [list, setList] = useState([])
  console.log(list);
  

  return (
    <>
     <Routes>
       <Route path='/' element= {<Landing setList = {setList}/>}/>
       <Route path='/data/:id' element= {<People  list = {list}/>}/>
     </Routes>


    </>
  )
}

export default App
