import React,{useState, useEffect} from "react";
import CreateProduct from "./productform";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";



const UpdatePro = ()=>{   
        const redirect = useNavigate();
        const{ id} = useParams();
        const [product, setProduct] = useState();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res=> {setProduct(res.data)
    })
        .catch(error=> console.log(error))
    }, []);



    const newProduct = product =>{

        axios.put(`http://localhost:8000/api/product/${id}`, product)
        .then(res=> {console.log(res.data); redirect("/")})
        .catch(error=> console.log(error))
    }
    return(
        <>
        <Form submitProp = {newProduct} initialtitle = {product.title} initialprice = {product.price} initialdiscription= {product.discription}/>
        </>
    )


    

}
export default UpdatePro
