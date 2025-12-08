import { useState } from 'react'
import './App.css'

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");





  return (
            <>
            <form>
                <label>First Name: </label>
                <input type={"text"} value={fname} onChange={(e) => setFname(e.target.value)} />
                <br/>
                <br/>
                <label>Last Name: </label>
                <input type={"text"} value={lname} onChange={(e) => setLname(e.target.value)} />
                <br/>
                <br/>
                <label>Email: </label>
                <input type={"text"} value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <br/>
                <label>Password: </label>
                <input type={"text"} value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <br/>
                <label>Confirm Password: </label>
                <input type={"text"} value={cpassword} onChange={(e) => setCpassword(e.target.value)} />
                <br/>
                <br/>
            </form>
            <h2>Your Form Data</h2>
            <br/>
            <br/>
            <h2>First Name : {fname}</h2>
            <h2>Last Name : {lname}</h2>
            <h2>Email: {email}</h2>
            <h2>Password : {password}</h2>
            <h2>Confirm Password : {cpassword}</h2>
        </>
  )
}

export default App
