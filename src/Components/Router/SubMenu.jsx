import React from "react";
import { Link } from "react-router-dom";


export default function SubMenu() {
  return (
    <nav className="navbar navbar-light bg-light container mt-1">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/comment/addpost">Add Post</Link>
      </div>
    </nav>
  );
}
