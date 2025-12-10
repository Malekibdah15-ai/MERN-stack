import React from "react";
import { useParams } from "react-router";


const Home = (props)=>{
    const {word , color, bgcolor} = useParams();

    const style = {
        color : color,
        backgroundColor : bgcolor,

    }
    return(
        <h1 className="w-3xs h-5 m-auto mt-3.5"  style= {style}>Welcome {word}</h1>
    )
}

export default Home; 