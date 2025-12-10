import React, { useState, useEffect } from "react";
import { data } from "react-router-dom";
import { useNavigate} from "react-router-dom";
const Landing = (props) => {
    const {setList} = props
    const [id, setID] = useState(0);
    const [selected, setSelect] = useState([]);
    // const [data, setData] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch("https://swapi.dev/api/people")
            .then(response => response.json())
            .then(response => setSelect(response))
            .catch(err => console.log({ err: "error" })
            )
    }, [])
    console.log(selected);


    const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://swapi.dev/api/people/${id}`)
      .then(res => res.json())
      .then(data => {setList(prev => [...prev, data]);navigate(`/data/${id}`); })
      .catch(err => console.log("error:", err));
  };


    return (
        <>
            <form onSubmit={handleSubmit}>
                {selected.results && (
                <select>
                    {selected.results.map((item, index) => (
                    <option key={index} >
                    {item.name}
                    </option>
                 ))}
                </select>
             )}

                <input className="border-amber-400 border w-2xs h-6 " type="text" value={id} onChange={(e)=> setID(e.target.value)}/>

                <button>search</button>

            </form>
        </>
    )
}
export default Landing;
