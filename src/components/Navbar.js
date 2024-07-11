import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-primary py-4"
        style={{ backgroundColor: "#D4E09B" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="/"
            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
          >
            {props.title}
          </a>
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
