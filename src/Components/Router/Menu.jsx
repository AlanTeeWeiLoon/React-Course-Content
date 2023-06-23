import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Menu() {
  const loc = useLocation();
  const navigate = useNavigate(); // useNavigate able to perform redirection based on provided URL
  const [role, setRole] = useState();

  useEffect(() => {
    let user_role = sessionStorage.getItem("role");
    setRole(user_role);
    console.log(role);
  }, [loc]);

  const logoutProcess = () => {
    sessionStorage.removeItem("role");
    alert("Logout Successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={role ? "/" : "/login"}>
          K O E N I G
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {role ? (
              role === "Admin" ? (
                <>
                  <Link className="nav-link" to="/home">
                    HOME
                  </Link>
                  <Link className="nav-link" to="/about">
                    ABOUT
                  </Link>
                  <Link className="nav-link" to="/contact">
                    CONTACT
                  </Link>
                  <Link className="nav-link" to="/details">
                    DETAILS
                  </Link>
                  <Link className="nav-link" to="/comment">
                    POSTS
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={logoutProcess}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/home">
                    HOME
                  </Link>
                  <Link className="nav-link" to="/about">
                    ABOUT
                  </Link>
                  <Link className="nav-link" to="/contact">
                    CONTACT
                  </Link>
                  <Link className="nav-link" to="/details">
                    DETAILS
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={logoutProcess}
                  >
                    Logout
                  </button>
                </>
              )
            ) : (
              <>
                <Link className="nav-link" to="/login">
                  LOGIN
                </Link>
                <Link className="nav-link" to="/register">
                  REGISTER
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
