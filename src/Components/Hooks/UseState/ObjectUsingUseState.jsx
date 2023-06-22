import React, { useState } from "react";

export default function ObjectsUsingUseState() {

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  }) // loginDetails state with object {username: "", password: ""}

  const loginProcess = (event) => {
    event.preventDefault()
    console.log(loginDetails)
  };

  const handleChange = (event) => {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    }) // set new login details to state based on user input
  }
  
  return (
    <div className="container mt-4">
      <form onSubmit={loginProcess}>
        <p>
          Username :
          <input type="text" onChange={handleChange} name="username" />
        </p>
        <p>
          Password :
          <input type="password" onChange={handleChange} name="password" />
        </p>
        <p>
          <button className="btn btn-primary">Login</button>
        </p>
      </form>
    </div>
  )
}
