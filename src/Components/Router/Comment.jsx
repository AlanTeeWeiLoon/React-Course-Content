import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Comment() {
  const [comment, setComment] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    getData()
  }, [])


  // Get Method
  const getData = () => {
    axios
      .get("http://localhost:4000/comments")
      .then((response) => setComment(response.data))
      .catch((error) => console.log(error));
  }

  const handleEditBtn = (item) => {
    navigate(`/comment/editpost/${item.id}`);
  }

  const handleDelete = (id) => {
    const temp = window.confirm("Are you sure to delete this data ?");
    if (temp) {
      axios
        .delete(`http://localhost:4000/comments/${id}`)
        .then(() => {
          alert("Data Deleted Successfully");
          getData();
        })
        .catch((e) => console.log(e));
    }
  }

  return (
    <div className="container mt-4">
      {/* Task List */}
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
    </div>
  );
}
