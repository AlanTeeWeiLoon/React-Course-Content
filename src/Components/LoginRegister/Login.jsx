import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const ref = useRef();

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(loginDetails)

    // Authentication
    let foundUser = user.find((u) => u.email === loginDetails.email)

    if (foundUser) {
      if (foundUser.password === loginDetails.password) {
        if (foundUser.role === "Admin") {
          sessionStorage.setItem("role", "Admin")
          navigate("/details");
        } else {
          sessionStorage.setItem("role", "Guest")
          navigate("/")
        }
      } else {
        alert("Wrong Password")
      }
    } else {
      alert("User Does not exist")
      const temp = window.confirm("Are you new user?")
      if (temp) {
        navigate("/register")
      }
    }
  }

  useEffect(() => {
    ref.current.focus()
    axios
      .get("http://localhost:4000/users")
      .then((response) => setUser(response.data))
      .catch((e) => console.log(e))
  }, [])

  return (
    <div className="container mt-3">
      <div className="col md-12">
        <h4 className="bg-info text-dark text-center">LOGIN</h4>
        <form className="form-control" onSubmit={handleSubmit}>
          Email :
          <input
            type="email"
            className="form-control"
            ref={ref}
            onChange={(event) => {
              setLoginDetails({ ...loginDetails, email: event.target.value });
            }}
          />
          Password :
          <input
            type="password"
            className="form-control"
            onChange={(event) => {
              setLoginDetails({
                ...loginDetails,
                password: event.target.value,
              });
            }}
          />
          <button className="btn btn-primary mt-2 btn-lg">Login</button>
        </form>
      </div>
    </div>
  )
}
