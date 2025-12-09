import { useState } from 'react'
import ToDo from './component/form';
import Display from './component/display';
import './App.css'
import { useEffect } from 'react';

function App() {
  const [list, setList] = useState([]);
  return (
    <>
      <ToDo setList = {setList}/>
      <Display list = {list} setLists = {setList} />
    </>
  )
}

export default App
