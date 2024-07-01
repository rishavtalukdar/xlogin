import { useState,useEffect } from "react";
import react from "react"

function App() {

const [username,setusername] =useState("")
const [password,setpassword] =useState("")
const [login,setlogin] =useState(false)
const [incorrect,setincorrect]= useState(false)



const handleSubmit=(e)=>{
  e.preventDefault();
  if(username==="user" && password==="password" ){
    setlogin(true)
  }else{
    setlogin(false)
    setincorrect(true)
  }
}

const valueChange=(event)=>{
  if(event.target.name==="username"){
    setusername(event.target.value)
  }else{
    setpassword(event.target.value)
  }
}

  return (
    <div >
      <h1>Login Page</h1>
      {login && (<p>Welcome, {username}!</p>)}
      {!login  && (
        <div>
          {incorrect && (<p className="error">"Invalid username or password"</p>)}
          <form onSubmit={handleSubmit}>
            <label for="username">Username:</label>
            <input type="text" value={username} name="username" onChange={valueChange} required></input><br></br>
            <label for="password">Password:</label>
            <input type="text" value={password} name="password" onChange={valueChange} required></input><br></br>
            <button type="submit">Submit</button>
          </form>
        </div>)}
    </div>
  );
}

export default App;
