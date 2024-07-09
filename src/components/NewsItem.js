import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl } = this.props;
    return (
      <>
        <div class="card" style={{ width: "25rem" }}>
          <img src={imageUrl} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <a href="/" class="btn btn-primary">
              aaaaa
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;