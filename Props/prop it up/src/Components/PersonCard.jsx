import React from "react";


const Person = (props)=>{
    const {firstName , lastName, Age, hairColor} = props;

    return(
        <>
        
        <h1>my name is {firstName} {lastName}</h1>
        <p>Age {Age}</p>
        <p>Hair clolo {hairColor}</p>
        
        </>


    )
}
export default Person