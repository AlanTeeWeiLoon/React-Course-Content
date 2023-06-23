import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [regDetails, setRegDetails] = useState({
    email: "",
    password: "",
    name: "",
    role: "Guest",
  })
  const navigate = useNavigate()
  const ref = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(regDetails)

    axios
      .post("http://localhost:4000/users", regDetails)
      .then(() => {
        alert("Registration Successfull")
        navigate("/login");
      })
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    ref.current.focus()
  }, [])

  return (
    <div className="container mt-3">
      <div className="container md-12">
        <h4 className="bg-info text-dark text-center">REGISTER</h4>
        <form className="form-control" onSubmit={handleSubmit}>
          Name:
          <input
            type="text"
            className="form-control"
            ref={ref}
            onChange={(event) => {
              setRegDetails({ ...regDetails, name: event.target.value });
            }}
          />
          Email:
          <input
            type="email"
            className="form-control"
            onChange={(event) => {
              setRegDetails({ ...regDetails, email: event.target.value });
            }}
          />
          Password:
          <input
            type="password"
            className="form-control"
            onChange={(event) => {
              setRegDetails({ ...regDetails, password: event.target.value });
            }}
          />
          <button className="btn btn-primary btn-lg mt-2">Register</button>
        </form>
      </div>
    </div>
  )
}
