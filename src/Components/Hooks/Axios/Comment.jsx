import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Comment() {

  const [comment, setComment] = useState()
  const [showAddForm, setShowAddForm] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)
  const [newTask, setNewTask] = useState({ name: "", email: "", body: "" })

  // initially get data
  useEffect(() => {
    getData()
  }, [])

  // GET Method
  const getData = () => {
    axios
      .get("http://localhost:4000/comments")
      .then((response) => setComment(response.data))
      .catch((error) => console.log(error))
  }

  const handleAddForm = () => {
    setShowAddForm(!showAddForm)
  }

  const handleNewChange = (event) => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value })
  }

  // POST Method
  const handleAddClick = () => {
    axios
      .post("http://localhost:4000/comments", newTask)
      .then(() => {
        alert("Added Successfully")
        setShowAddForm(!showAddForm)
        getData()
      })
      .catch((e) => console.log(e))
  }

  const handleEditBtn = (item) => {
    setShowEditForm(!showEditForm)
    setNewTask(item)
  }

  // PUT Method
  const handleUpdateRecord = () => {
    axios
      .put(`http://localhost:4000/comments/${newTask.id}`, newTask)
      .then(() => {
        alert("Edited Successfully")
        getData()
        setShowAddForm(false)
        setShowEditForm(false)
      })
      .catch((e) => console.log(e))
  }

  // DELETE Method
  const handleDelete = (id) => {
    const temp = window.confirm("Are you sure to delete this data ?")
    if (temp) {
      axios
        .delete(`http://localhost:4000/comments/${id}`)
        .then(() => {
          alert("Data Deleted Successfully")
          getData()
        })
        .catch((e) => console.log(e))
    }
  };

  return (
    <div className="container mt-4">
      {/* Add new reord button */}
      {!showAddForm && !showEditForm && (
        <div className="row">
          <div className="col md-12">
            <button className="btn btn-success m-2" onClick={handleAddForm}>
              Add New Record
            </button>
          </div>
        </div>
      )}

      {/* Task List */}
      {!showAddForm && !showEditForm && (
        <div className="row">
          <div className="col md-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>BODY</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {comment ? (
                  comment.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.body}</td>
                      <td>
                        <button
                          className="btn btn-small btn-primary"
                          onClick={() => handleEditBtn(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-small btn-danger mt-1"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Create Task Form */}
      {showAddForm && (
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
            Add Task
          </button>
        </div>
      )}

      {/* Create Edit Form */}
      {showEditForm && !showAddForm && (
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
        </div>
      )}
    </div>
  )
}
