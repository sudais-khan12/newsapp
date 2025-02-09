import React from "react";

const NewsItem = ({
  title,
  description,
  imageUrl,
  newsUrl,
  author,
  date,
  source,
}) => {
  return (
    <>
      <div
        className="card mb-5"
        style={{
          cursor: "pointer",
          backgroundColor: "#D4E09B",
          border: "none",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "90%", zIndex: "1" }}
        >
          {source}
        </span>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="..."
          draggable="false"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            {" "}
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toUTCString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
            style={{ backgroundColor: "#A44A3F", border: "none" }}
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
