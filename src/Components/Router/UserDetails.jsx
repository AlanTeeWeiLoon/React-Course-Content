import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UserDetails() {

  const [singleUser, setSingleUser] = useState()
  const res = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + res.id)
      .then((response) => setSingleUser(response.data))
      .catch((e) => console.log(e))
  }, [])

  return (
    <div className="container">
      {singleUser && (
        <table className="table table-bordered">
          <tbody>
            <tr>Name</tr>
            <td>{singleUser.name}</td>
            <tr>Email</tr>
            <td>{singleUser.email}</td>
            <tr>Username</tr>
            <td>{singleUser.username}</td>
            <tr>Phone Number</tr>
            <td>{singleUser.phone}</td>
            <tr>Website</tr>
            <td>{singleUser.website}</td>
          </tbody>

          <button
            className="btn btn-success btn-sm"
            onClick={() => navigate("/details")}
          >
            Go Back
          </button>
        </table>
      )}
    </div>
  )
}
