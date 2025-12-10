import { useState } from 'react'
import React from "react";

const Color = (props)=>{
    const [color, setColor] = useState([])

    const add = (e)=>{
        e.preventDefault();
        props.setArray((prev)=> [...prev, color]);

        setColor("");
    } 

    return(
        <>
        <form>
            <input className='w-64 border-amber-300 border-2  rounded-b-sm h-10 m-8' type="text" value={color} onChange={(e)=> setColor(e.target.value)}  />

            <button className='w-24 h-10 border-2 rounded-2xl bg-blue-500 ' onClick={add}>Add</button>
        </form>
        </>
    )

}

export default Color