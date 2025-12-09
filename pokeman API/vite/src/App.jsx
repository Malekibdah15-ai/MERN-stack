import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// "https://pokeapi.co/api/v2/pokemon/132"
function App() {
  const [list, setList] = useState([]);
  const [isSubmted, setIsSubmted] = useState(false);

  useEffect(()=>{
    if(isSubmted){
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(responce=> responce.json())
      .then(responce=> setList(responce))
      .catch(error=> {console.log(error , "error")});
    }
  },[isSubmted])

  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsSubmted(true);
  }

  return (
    <>
    <div>
      {list.length > 0 && list.map((person, index)=>{
          return (<div key={index}>{person.name}</div>)
        })}
    </div>
    <form >

    <button  onClick={(e)=> handleSubmit(e)}>submit</button>

    </form>
      
    </>
  )
}

export default App
