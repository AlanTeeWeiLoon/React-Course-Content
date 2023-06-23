import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
  const [newTask, setNewTask] = useState({ name: "", email: "", body: "" })
  const navigate = useNavigate()
  const handleNewChange = (event) => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value })
  }

  const handleAddClick = () => {
    axios
      .post("http://localhost:4000/comments", newTask)
      .then(() => {
        alert("Added Successfully")
        navigate("/comment")
      })
      .catch((e) => console.log(e))
  }

  return (
    <div className="container">
      <h1>Add New Record</h1>

      <label>Name</label>
      <input
        type="text"
        name="name"
        className="form-control"
        onChange={handleNewChange}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        className="form-control"
        onChange={handleNewChange}
      />
      <label>Body</label>
      <input
        type="text"
        name="body"
        className="form-control"
        onChange={handleNewChange}
      />

      <button className="btn btn-warning m-1" onClick={handleAddClick}>
        Add Post
      </button>
      <button
        className="btn btn-success m-1"
        onClick={() => navigate("/comment")}
      >
        Go Back
      </button>
    </div>
  )
}
