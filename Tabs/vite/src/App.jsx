import { useState } from 'react'
import Tab from './component/Tab'


function App() {
  const tab = [
    { label: "Tab 1", content: "This is content for Tab 1" },
    { label: "Tab 2", content: "This is content for Tab 2" },
    { label: "Tab 3", content: "This is content for Tab 3" },
  ];
  console.log(tab);
  

  return (
    <>
      <Tab tab = {tab} />
    </>
  )
}

export default App
