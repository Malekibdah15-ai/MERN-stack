import React, {useState} from "react";







const Login = () =>{
  const [name, setName] = useState("");

const [nameError, setNameError] = useState("");



const handleSubmit= (e)=>{
  e.preventDefault();

  if (name.length <5){
    setNameError("name must be more than 5")
  }
  else{
        setNameError("")

  }

}
const handleInput = (e)=>{
  const vall = e.target.value;  
  setName(vall)
}

    return( <div>
        <form className='form' >

          <div>
            <label className='label'>Name</label>
            <input 
            className='input' value={name} onChange={handleInput}  type="text"  />
        </div>
        

        <p>
          {nameError}
        </p>

        <button className="blue" onClick={ handleSubmit} >
          submit
          </button>         
          
        </form>

    
    </div>
    
)
}

export default Login;