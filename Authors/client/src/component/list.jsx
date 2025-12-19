import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import { useParams } from "react-router-dom";

const List = ()=>{
    const [authors, setAuthors] = useState([]);
    // const [print, setPrint] = useState(false);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{

                const res = await axios.get("http://localhost:8000/api/author/")
                setAuthors(res.data);
                
            }catch(error){
                console.log(error);                
            }
        };
        fetchData();
    }, [])

    const deleteAuthor = (id)=>{
        const del = async ()=>{
            try{
                const res = await axios.delete(`http://localhost:8000/api/delete/${id}`)
                 setAuthors(authors.filter(author => author._id !== id));              
            }catch(error){
                console.log(error);
                
            }
        }
        del();
    };
    return(
        <div>
        <h1>l;md;fkvm;emvwrvkl'n</h1>
        <Link to = 'authors/new'>create</Link>
        { authors.map(items=>(
            <div key={items._id}>
                <p>{items.name}</p>
                <button onClick={()=> deleteAuthor(items._id)} >delete</button>
                <Link to={`authors/${items._id}`}>edit</Link>

            </div>
        
    ))}
        </div>
    )
};
export default List