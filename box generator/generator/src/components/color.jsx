import React,{useState} from "react";

const Blue = (props)=>{

    const {Colors} = props

    return(
        <>

        <ul>
            {Colors.map((item)=>
            <li>{item}</li>
        )}
        </ul>
        
        
        </>
    )
}
export default Blue