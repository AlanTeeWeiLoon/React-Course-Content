import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserList() {
  const [user, setUser] = useState()

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUser(response.data))
      .catch((e) => console.log(e))
  }, [])


  return (
    <div className="container">
      {user ? (
        user.map((item, index) => (
          <div key={index}>
            <Link to={`${item.id}`} style={{ "text-decoration": "none" }}>
              {item.name}
            </Link>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}
