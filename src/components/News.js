import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <>
        News
        <NewsItem
          title="Sample Title"
          desscription="Sample Description"
          imageUrl="sample url"
        />
      </>
    );
  }
}

export default News;
