import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
const Landing = (props) => {
    const {setList} = props
    const [id, setID] = useState(0);
    const [selected, setSelect] = useState("people");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://swapi.dev/api/${selected}/${id}`)
      .then(res => res.json())
      .then(data => {setList(prev => [...prev, data]);
        if(selected == "people"){
            navigate(`/data/${id}`); 

        }else{
            navigate(`/planet/${id}`); 
        }
      })
      .catch(err => console.log("error:", err));
  };


    return (
        <>
            <form onSubmit={handleSubmit}>
               
                <select value={selected} onChange={(e)=> setSelect(e.target.value)}>
                    
                    <option value="people" >people</option>
                    <option value="planets">planet</option>
                </select>
      

                <input className="border-amber-400 border w-2xs h-6 " type="text" value={id} onChange={(e)=> setID(e.target.value)}/>

                <button>search</button>

            </form>
        </>
    )
}
export default Landing;
