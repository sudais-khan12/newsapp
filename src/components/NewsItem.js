import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <>
        <div
          className="card mb-5"
          style={{
            width: "20rem",
            cursor: "pointer",
            backgroundColor: "#D4E09B",
            border: "none",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            draggable="false"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
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
  }
}

export default NewsItem;
