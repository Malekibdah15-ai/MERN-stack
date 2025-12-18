import axios from "axios";
import React, {useState} from "react";
import AuthorForm from "./form";


const Create = ()=>{
    const [author, setAuthor] = useState([]);

    const createAuthor = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/create/author", author)
        .then(res=> console.log(res.data)
        .catch(error=> console.log(error)
        )
        )
    }
    <AuthorForm  create = {createAuthor}/>
}