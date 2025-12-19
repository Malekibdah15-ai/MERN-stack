import { useState } from 'react'
import Create from './component/create'
// import AuthorForm from './component/form'
import Update from './component/update'
import List from './component/list'
import {Routes, Link, Route } from "react-router-dom"

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path = 'authors/:id' element= {<Update/>}/>
        <Route path='authors/new' element = {<Create/>}/>
      </Routes>
    </>
  )
}

export default App
