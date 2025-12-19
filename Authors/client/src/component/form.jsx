import React from "react";
import { useState } from "react";
const AuthorForm = (props)=>{

    const {functionProp, initialName, errors  } = props
    const [name, setName] = useState(initialName );

  const handleSubmit = e => {
    e.preventDefault();
    functionProp({ name });
    setName("");
};


    return(
        <>
        <form onSubmit={handleSubmit}> 
            

            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
            
            <button >submit</button>

        </form>
        
        </>
    )
}
export default AuthorForm