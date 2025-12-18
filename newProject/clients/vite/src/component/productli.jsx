import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const ProductList = (props)=>{
     const [product, setProduct] = useState([]); 
     const {isFetched} = props

    useEffect(()=>{
        axios.get("http://localhost:8000/api/all/product")
        .then(res=>setProduct(res.data) ,
    )
        .catch(error=> console.log(error))
        
    }, [isFetched]);
    
    console.log(product)
    
    return(
    <div>

        {product && product.map((product)=>
        <ul>

            <li key={product._id}>
                
            <Link to = {`/api/${product._id}`}>
            
            {product.title}
            
            </Link>
            
            </li>
        </ul>

    )}
</div>
        
        
        
    )

}
export default ProductList;