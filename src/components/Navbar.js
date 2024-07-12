import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-primary py-4"
        style={{ backgroundColor: "#D4E09B" }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
          >
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-dark mt-1"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Catogaries
                </Link>
                <ul
                  className="dropdown-menu"
                  style={{ backgroundColor: "#D4E09B" }}
                >
                  <li>
                    <Link className="dropdown-item" to="business">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="entertainment">
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="general">
                      General
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="health">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="science">
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="sports">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="technology">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="everything">
                      Everything
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="headlines">
                      Headlines
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Link
                to="/everything"
                class="btn btn-outline-success"
                type="submit"
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
