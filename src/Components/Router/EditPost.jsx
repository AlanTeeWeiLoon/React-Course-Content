import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const [newTask, setNewTask] = useState({ name: "", email: "", body: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:4000/comments/" + id)
      .then((response) => setNewTask(response.data))
      .catch((e) => console.log(e));
  }, []);

  const handleNewChange = (event) => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value });
  };

  const handleUpdateRecord = () => {
    axios
      .put(`http://localhost:4000/comments/${newTask.id}`, newTask)
      .then(() => {
        alert("Edited Successfully");
        navigate("/comment");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="container">
      <h1>Edit Record</h1>
      <label>Name</label>
      <input
        type="text"
        name="name"
        className="form-control"
        value={newTask.name}
        onChange={handleNewChange}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        className="form-control"
        value={newTask.email}
        onChange={handleNewChange}
      />
      <label>Body</label>
      <input
        type="body"
        name="body"
        className="form-control"
        value={newTask.body}
        onChange={handleNewChange}
      />
      <button className="btn btn-warning mt-2" onClick={handleUpdateRecord}>
        Update Record
      </button>
      <button
        className="btn btn-success m-1"
        onClick={() => navigate("/comment")}
      >
        Go Back
      </button>
    </div>
  );
}
