import React,{useState, useEffect} from "react";
import CreateProduct from "./productform";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const UpdatePro = ()=>{   
        const [title, setTitle] = useState("");
        const [price, setPrice] = useState(0);
        const [discription, setDiscription] = useState("");
        const redirect = useNavigate();
        const{ id} = useParams();


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res=> {setTitle(res.data.title);
            setPrice(res.data.price);
            setDiscription(res.data.discription)
    })
        .catch(error=> console.log(error))
    }, []);



    const newProduct = (e)=>{
      e.preventDefault();

      const product = { title, price, discription};
        axios.put(`http://localhost:8000/api/product/${id}`, product)
        .then(res=> {console.log(res.data); redirect("/")})
        .catch(error=> console.log(error))
    }
    return(
        <>
        <form onSubmit={newProduct}>
            <p>
               <label>title</label><br/>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>price</label><br/>
                    <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label>decription</label><br/>
                    <input type="text" onChange={(e)=>setDiscription(e.target.value)} value={discription}/>
                </p>
                    <input type="submit"/>
        </form>
        </>
    )


    

}
export default UpdatePro
