import { useState,useEffect } from 'react'
import axios from 'axios';
function App() {
  const [list, setList] = useState([]);



  const pokeMan=()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(responce=> {
      setList(responce.data)
      console.log(responce);
    })
    .catch(error=>{
      console.log(error);
      
    })
  }


  // const handle = (e)=>{
  //   e.preventDefault();
  //   setIsSubmted(true);
  // }

  return (
    <>
 
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={pokeMan}>Fetch Pokemon</button>

      <ul style={{ listStyle: "disc", width: "200px", margin: "20px auto" }}>
        {list.map((poke, index) => (
          <li key={index}>{poke.name}</li>
        ))}
      </ul>
    </div> 
    </>
  )
}

export default App
