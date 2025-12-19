import axios from "axios";
import React, {useState} from "react";
import AuthorForm from "./form";
import List from "./list";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
const Create = ()=>{
    const navgate = useNavigate();
    const [errors, setErrors] = useState({});


    const createAuthor = author => {
    axios.post("http://localhost:8000/api/create/author", author)
        .then(res =>  setAuthors(res.data), navgate('/'))
        .catch(error => {
            setErrors(err.response.data.errors);
        });
};

    return(
        <>
        <Link to='/'>Home</Link>
        <AuthorForm  functionProp = {createAuthor} errors={errors} initialName = ""/>

        </>
    );
};
export default Create;
