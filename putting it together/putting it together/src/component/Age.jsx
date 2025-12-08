import React, { useState } from 'react'

const Age = (props)=>{
    const {fname, lname, haircolor} = props;
    const[age, setAge] = useState(20);

    const submit = () =>{
        setAge(age + 1);
    }

    return(

        <>
        <h1>{fname}  {lname}</h1>
        <p>{age}</p>
        <p>{haircolor}</p>
        <button onClick={submit}> Birthday button for Jane Dou</button>
        </>
    );
};
export default Age;

