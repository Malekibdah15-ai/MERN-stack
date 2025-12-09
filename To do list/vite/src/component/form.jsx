import React,{useState} from 'react'

const ToDo = (props)=>{
    const [name, setName] = useState("");
   
    const handleSubmit = (e)=>{
        e.preventDefault()
        props.setList(prevItems => [...prevItems, name]); // Creates a new array with existing items and the new item
        console.log(name);
        
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />

            <button>add</button>

        </form>
        
        
        </>
    )
}

export default ToDo;
