import React,{useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductList from "./productli";
const CreateProduct = (props)=>{
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [discription, setDiscription] = useState("");
    const {setIsFitched} = props
    
  const handle = (e) => {
  e.preventDefault();

  const product = { title, price, discription};

  axios
    .post("http://localhost:8000/api/product", product)
    .then(res => {
      console.log(res); setIsFitched(prev=> !prev)})
      
    .catch(error => console.log(error));

  setTitle("");
  setPrice("");
  setDiscription("");
}

    return(
        <>
        <form onSubmit={handle}>
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
        <ProductList />
        
        </>
    )
}
export default CreateProduct
