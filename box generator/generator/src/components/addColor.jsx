import { useState } from 'react'
import React from "react";

const Color = (props)=>{
    const [color, setColor] = useState("")

    const add = ()=>{
        e.preventDefault();
        props.setArray([array, color]);

        setColor("");
    }
    

    return(
        <>
        <form onSubmit={add}>
            <input type="text" value={color} onChange={(e)=> setColor(e.target.value)}  />

            <button>Add</button>
        </form>
        </>
    )

}

export default Color