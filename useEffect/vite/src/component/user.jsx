import React,{useState, useEffect} from "react";

const UseApi = ()=>{
    const [list, setList] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(responce=> responce.json())
        .then(responce=> setList(responce.results))
        .catch((err)=> {console.err("error" , err)});

    },[])


}

export default UseApi;