import React,{useState, useEffect} from "react";
import axios from "axios";
const Gaming = (props)=>{
    const {id} = props
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

     useEffect(()=>{
        const fetch = async ()=>{
            try{
                const res = await axios.get("http://localhost:8000/api/games")
                setPlayers(res.data)
                setLoaded(true)
            }catch(error){
                console.log(error); 
            }}
            fetch();
        },[] ) 

        const updateStatus = (id, status) =>{
            const update = async ()=>{
                try{
                    const res = await axios.put(`http://localhost:8000/api/update/${id}`, {status})
                    setPlayers(prev=> prev.map(player=> player._id === id? res.data : player) )
                }catch(error){
                    console.log(error);
                }} 
                update();
        }
  return (
    <>
      <h2>Player Status - Game 1</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {players.map(player => (
            <tr key={player._id}>
              <td>{player.name}</td>

              <td>
                <button
                  style={{ background: player.status === "Playing" ? "green" : "" }}
                  onClick={() => updateStatus(player._id, "Playing")}
                >
                playing
                </button>
              </td>

              <td>
                <button
                  style={{ background: player.status === "Not Playing" ? "red" : "" }}
                  onClick={() => updateStatus(player._id, "Not Playing")}
                >
                  Not Playing
                </button>
              </td>

              <td>
                <button
                  style={{ background: player.status === "Undecided" ? "yellow" : "" }}
                  onClick={() => updateStatus(player._id, "Undecided")}
                >
                  Undecided
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Gaming