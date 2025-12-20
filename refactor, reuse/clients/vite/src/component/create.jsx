import React,{useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "./productform";
const Create = ()=>{
    
  const createProduct = product => {

  axios
    .post("http://localhost:8000/api/product", product)
    .then(res => 
      console.log(res))
      
    .catch(error => console.log(error));
}

return(
    <>
    <Form  submitProp = {createProduct} initialtitle = "" initialprice = "" initialdiscription=""/>
    </>
)
}
export default Create