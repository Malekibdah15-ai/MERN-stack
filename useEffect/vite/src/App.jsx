import { useState, useEffect} from 'react'
// import UseApi from './component/user'

function App() {
      const [list, setList] = useState([]);
      const [isSubmted, setIsSubmted] = useState(false);
  
      useEffect(()=>{
        if(isSubmted){
          fetch("https://jsonplaceholder.typicode.com/users")
          .then(responce=> responce.json())
          .then(responce=> setList(responce))
          .catch((err)=> {console.err("error" , err)});
        }
      },[isSubmted])
      const handle = (e)=>{
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
      <form>
        <button onClick={(e)=> handle(e)}>    
        Click</button>

      </form>

    </>
  )
}

export default App
