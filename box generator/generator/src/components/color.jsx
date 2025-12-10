import React,{useState} from "react";

const Blue = (props)=>{

    const {Colors} = props

    return(
        <>

        <ul>
            {Colors.map((item)=>
            <li className="flex items-center w-7xl m-auto ">{item}</li>
        )}
        </ul>
        
        
        </>
    )
}
export default Blue