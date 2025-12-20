import React,{useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductList from "./productli";
const Form = (props)=>{
  const {submitProp, initialtitle, initialprice ,initialdiscription} = props
    const [title, setTitle] = useState(initialtitle);
    const [price, setPrice] = useState(initialprice );
    const [discription, setDiscription] = useState(initialdiscription);
    
  const handle = (e) => {
  e.preventDefault();
  submitProp({title, price, discription})
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
