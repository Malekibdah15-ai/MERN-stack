import { useState } from 'react'
import './App.css'

function App() {
   const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const [fnameError, setFnameError] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cpasswordError, setCpasswordError] = useState("");

const validateFirstName = (e) => {
  const fname = e.target.value;
  setFname(fname);
  if(fname.trim().length < 5){
    setFnameError("first name must be at least 5 chur")
  }else{
    setFnameError("");
  }

}

const validateLastName = (e) => {
  const lname = e.target.value;
  setLname(lname);
  if(lname.trim().length < 5){
    setLnameError("last name must be at least 5 chur")
  }else{
    setLnameError("");
  }

}

const validateEmail = (e) => {
  setEmail(e.target.value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)){
    setEmailError("please inter a valid email")
  }else{
    setEmailError("");

  }

}

const validatePassword = (e) => {
  const vall = e.target.value;
  setPassword(vall);
  if(vall.length < 8){
    setPasswordError("password at least should be 8 chur")
  }else{
    setPasswordError("");
  }

}

const validateconfirmPassword = (e)=>{
  const value = e.target.value;
  setCpassword(value);
  if(password !== value){
    setCpasswordError("password didnt match")
  }else{
    setCpasswordError("");
  }
}



  return (
    <>
     <form >
  
      <label >first name</label>
      <input type='text' value={fname} onChange={validateFirstName} />
      <p style={{color : "red"}}>{fnameError}</p>
      <br/>
      <label >lastName</label>
      <input type="text" value={lname} onChange={validateLastName} />
      <p style={{color : "red"}}>{lnameError}</p>
      <br/>
      <label>Email</label>
      <input type="text" value={email} onChange={validateEmail} />
      <p style={{color : "red"}}>{emailError}</p>
      <br/>
      <label>Passowrd</label>
      <input type="text" value={password} onChange={validatePassword} />
      <p style={{color : "red"}}>{passwordError}</p>
      <br/>
      <label>confirm passowrd</label>
      <input type="text" value={cpassword} onChange={validateconfirmPassword}/>
      <p style={{color : "red"}}>{cpasswordError}</p>
      
     </form>
    </>
  )
}

export default App
