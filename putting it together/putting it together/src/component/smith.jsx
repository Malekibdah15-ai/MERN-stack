import React, { useState } from 'react'

const Smith = (props) =>{
    const {fname, lname, haircolor} = props;

    const [age, setAge] = useState(30);

    const onSubmit = () =>{
        setAge(age + 1)
    }

    return(
        <>
        <h1>{fname}  {lname}</h1>
        <p>{age}</p>
        <p>{haircolor}</p>
        <button onClick={onSubmit}> Birthday button for smith john</button>
        
        </>
    );
};
export default Smith