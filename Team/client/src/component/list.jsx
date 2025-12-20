import React,{useState,useEffect} from "react";
import axios from "axios"
import {Link} from "react-router-dom"
// import { useParams } from "react-router-dom";

const List = (props)=>{
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        const fetchdata = async ()=>{
            try{
                const res = await axios.get("http://localhost:8000/api/games")
                setData(res.data)
            }catch(error){
                console.log(error); 
            }}
            fetchdata();
        },[] ) 
    
    

    const deletePlayer = (id)=>{
        const del = async ()=>{
            try{
                const res = await axios.delete(`http://localhost:8000/api/delete/${id}`)
                setData(prev => prev.filter(player => player._id !== id))
            }catch(error){
                console.log(error); 
            }}
            del();
    }

    return(
        <>
        <Link to='/add'>add player</Link>
        <table border="1" cellPadding="8" cellSpacing="0">
  <thead>
    <tr>
      <th>Name</th>
      <th>Position</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
    {data.map(players => (
        
      <tr key={players._id}>
        <td>{players.name}</td>
        <td>{players.postion}</td>
        <td>
          <button onClick={() => deletePlayer(players._id)}>
            Delete
          </button>
          <td><Link to = {`/status/game/${players._id}`}>manage game</Link></td>
        </td>
      </tr>
     
    ))}
  </tbody>
</table>
        
        </>
    )
}
export default List