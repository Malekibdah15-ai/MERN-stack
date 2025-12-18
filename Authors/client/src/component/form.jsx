import React from "react";
import { useState } from "react";
const AuthorForm = ()=>{
    const [name, setName] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

    }

    return(
        <>
        <form onSubmit={handleSubmit}> 
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e)=> setName(e.target.valueAsDate)} />

            <button >submit</button>

        </form>
        
        </>
    )
}
export default AuthorForm