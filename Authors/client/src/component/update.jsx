import React,{useState, useEffect} from "react";
import axios from "axios";
import AuthorForm from "./form";
import {Link, useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";
const Update = (props)=>{
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState({});
    // const [isFetched, setIsFetched] = useState(false);
    const navgate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`http://localhost:8000/api/author/${id}`)
                setAuthor(res.data);
                setLoaded(true)
            }catch(error){
                setErrors(err.response.data.errors);
                
            }
        };
        fetchData();
        // setIsFetched(true);
    }, [])

    const updateAuthor = async (author) =>{
        try{
            const res = await axios.put(`http://localhost:8000/api/update/${id}`, author);
           console.log(res.data), navgate('/')
            
        }catch (error){
            console.log(error)
            
        }
    };
    return(
        <>
        <Link to='/'>Home</Link>
        <h1>;domv;dkfmv;fsmvk;</h1>
        {loaded && (<AuthorForm functionProp = {updateAuthor} errors={errors} initialName = {author.name} />)};
    
      </>
  );
};
export default Update;



