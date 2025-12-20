
import React,{useState} from "react";
import List from "./list";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const AddTeam = (props)=>{
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [postion , setPostion] = useState("");
    const [error, setErrors] = useState([]);

    const handleSubmit = async e => {
    e.preventDefault();
    try {
    const team = {name , postion}
      await axios.post("http://localhost:8000/api/create/game", team);
      alert("Player added successfully!");
      setErrors([]);
      navigate('/');
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setErrors(err.response.data.errors);
      }
    }
  };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label >player Name</label>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />

            <label>postion</label>
            <input type="text" value={postion } onChange={(e)=> setPostion(e.target.value)} />

            <button>Add</button>
           {error.length > 0 && (
            <ul style={{ color: "red" }}>
            {error.map((err, i) => <li key={i}>{err}</li>)}
        </ul>
      )}
        </form>
        </>
    )
}
export default AddTeam

