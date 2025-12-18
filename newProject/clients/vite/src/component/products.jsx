import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  // const [loading , setLoading]=useState(false)
  const rederct = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then(res => {setProduct(res.data)
        console.log(res.data);
        
      }
    )
      .catch(err => console.error(err));
  }, [id]);

  // if (!product) return <p>Loading...</p>;
const deleteProduct = (id)=>{
  axios.delete(`http://localhost:8000/api/product/${id}`)
  .then(del=> {console.log(del); rederct("/")})
  .catch(error=> console.log(error)
  )

}
  return (
    <div>
      <h2>Title: {product.title}</h2>
      <p>Price: {product.price}</p>
      <p>Description:  {product.description}</p>

      <button onClick={()=> deleteProduct(product._id)}>Delete</button>
      <Link to= {`/product/${product._id}/edit`}>edit</Link>

    </div>
  );
}
export default Products